import React, {useEffect} from 'react';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getIsAuth} from "../../redux/selectors/profile-selector";
import {getLogin} from "../../redux/selectors/header-selector";

const HeaderContainer = ({getAuthUserData,isAuth,login,logout}) => {

    useEffect(() => {
        getAuthUserData();
    }, [getAuthUserData])

    return <Header isAuth={isAuth} login={login} logout={logout} />
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);