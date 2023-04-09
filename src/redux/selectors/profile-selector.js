export const getProfile = (state) =>{
    return state.profilePage.profile;
}

export const getIsAuth = (state) =>{
    return state.auth.isAuth;
}

export const getStatusText = (state) =>{
    return state.profilePage.status;
}
export const getAuthorizedUserId = (state) =>{
    return state.auth.id;
}





