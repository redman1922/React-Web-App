const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initianalState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'It\'s my first post', like: 20},
        {id: 3, message: 'It\'s my first post', like: 25}
    ],
    newPostText: 'Denis Davidov',
    profile: null
}

const profileReducer = (state = initianalState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text});
export const addPostActionCreator = () => ({type: ADD_POST});

export default profileReducer;