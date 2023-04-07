import {profileAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: GET_STATUS, status: status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const getUserProfileThunk = (userId) => async (dispatch) => {
    const response = await profileAPI.getIdUserProfile(userId)
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

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};
export const saveProfile = (profile,setStatus) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);

    const userId = getState().auth.id;

    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunk(userId))
    } else {
        setStatus(response.data.messages[0]);
        return Promise.reject(response.data.messages[0]);
    }
};
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText: newPostText});

export default profileReducer;