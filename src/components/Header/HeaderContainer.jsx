import React from 'react';
import Header from "./Header";
import axios from "axios";
import {SetAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        usersAPI.authUser().then(data => {
                if(data.resultCode === 0){
                    let {id,login,email} = data.data;
                    this.props.SetAuthUserData(id,email,login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,{SetAuthUserData})(HeaderContainer);