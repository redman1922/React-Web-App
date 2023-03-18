import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            };
        };
        default:
            return state;
    }

}
export const SetAuthUserData = (id,email,login) => ({type: SET_USER_DATA, data: {id,email,login}});
export const getAuthUserData = () => (dipatch) => {
    usersAPI.authUser().then(data => {
        if(data.resultCode === 0){
            let {id,login,email} = data.data;
            dipatch(SetAuthUserData(id,email,login));
        }
    });
}


export default authReducer;