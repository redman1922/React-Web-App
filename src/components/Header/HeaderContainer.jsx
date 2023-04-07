import React, {useEffect} from 'react';
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    }, [])

    return <Header {...props} />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);