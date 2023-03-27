import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return <div>
        {/*<div>*/}
        {/*    <img src='https://i.ytimg.com/vi/otZ_ofVAldY/maxresdefault.jpg'></img>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>+ descripsion
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
}

export default ProfileInfo;