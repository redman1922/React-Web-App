import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';


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
                ...action.payload
            };
        }
        default:
            return state;
    }

}
export const SetAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authUser();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(SetAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        setStatus(response.data.messages);
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false));
    }
}


export default authReducer;