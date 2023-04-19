import React, {useEffect} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth, getProfile, getStatusText} from "../../redux/selectors/profile-selector";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainer = (props) => {

    let {userId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        let id = userId || props.authorizedUserId;
        if (!id) {
            navigate('/login')
        } else {
            props.getUserProfileThunk(id);
            props.getStatus(id);
        }
    }, [userId, props.authorizedUserId]);

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div className={s.profileContent}>
            <Profile {...props}
                     isOwner={!userId}
                     profile={props.profile}
                     status={props.status} update={props.updateStatus}
                     savePhoto={props.savePhoto}
            />
        </div>);
}

let mapStateToProps = (state) => {

    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        status: getStatusText(state),
        authorizedUserId: getAuthorizedUserId(state),
    }
}

export default compose(connect(mapStateToProps, {
        getUserProfileThunk,
        getStatus,
        updateStatus,
        savePhoto,
    saveProfile,
    }),
)(ProfileContainer);