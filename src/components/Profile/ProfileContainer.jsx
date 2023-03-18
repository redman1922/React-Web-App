import React, {useEffect} from 'react';
import s from './Profile.module.css';

import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {toggleIsFetching} from "../../redux/users-reducer";
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

const ProfileContainer = (props) => {

    const params = useParams();

    if (!params.userId) {
        params.userId = 2;
    }

    useEffect(() =>{
        props.getUserProfileThunk(params.userId);
    },[]);



        return (
            <div className={s.content}>
            <Profile profile={props.profile}/>
        </div>
        );

}


let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{setUserProfile,toggleIsFetching,getUserProfileThunk}),
    withAuthNavigate
)(ProfileContainer);