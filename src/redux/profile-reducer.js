import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const DELETE_STATUS = 'DELETE_STATUS';

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

        case DELETE_STATUS:{
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});
export const setStatus = (status) => ({type: GET_STATUS, status:status});
export const deletePost = (postId) => ({type: DELETE_STATUS, postId});
export const getUserProfileThunk = (userId) => async (dispatch) => {
    const response = await usersAPI.getIdUserProfile(userId)
            dispatch(toggleIsFetching(false))
            dispatch(setUserProfile(response.data));

    ;
};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);

            dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText:newPostText});

export default profileReducer;