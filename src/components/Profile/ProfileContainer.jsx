import React, {useEffect} from 'react';
import s from './Profile.module.css';

import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

const ProfileContainer = (props) => {

    const params = useParams();

    if (!params.userId) {
        params.userId = 2;
    }

    useEffect(() =>{
        usersAPI.getIdUserProfile(params.userId)
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(result => {
                console.log(result)
                props.toggleIsFetching(false);
                props.setUserProfile(result);
                props.setTotalUsersCount(result.totalCount);
            });
    },[]);



        return (<div className={s.content}>
            <Profile profile={props.profile}/>
        </div>
        );

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}



export default connect(mapStateToProps,{setUserProfile,toggleIsFetching,setTotalUsersCount})(ProfileContainer);