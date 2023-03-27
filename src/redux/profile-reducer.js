import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';

let initianalState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 20},
        {id: 3, message: 'It\'s my first post', like: 25}
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initianalState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});
export const setStatus = (status) => ({type: GET_STATUS, status:status});
export const getUserProfileThunk = (userId) => (dispatch) => {
    usersAPI.getIdUserProfile(userId)
        .then(response => response.json())
        .catch(err => console.log(err))
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(data));
        });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            console.log(response)
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText:newPostText});

export default profileReducer;