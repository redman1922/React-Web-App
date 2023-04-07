import React, {useEffect} from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {

    let {userId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                navigate('/login')
            }
        }
        if (userId) {
            props.getUserProfileThunk(userId);
            props.getStatus(userId);
        }

    }, [userId]);


    return (<div className={s.content}>
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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
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