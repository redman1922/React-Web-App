import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user-default.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const handleSubmit = (formData, setStatus) => {
        saveProfile(formData, setStatus).then(() => {
            setEditMode(false);
        })
    }

    return <div>
        <div className={s.descriptionBlock}>
            <div className={s.profileAvatarStatus}>
                <div className={s.profileAvatar}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <div><input
                        className={s.profileInfoUploadInput}
                        id="file-upload"
                        type={"file"}
                        onChange={mainPhotoSelectedOn}/>
                        <label className={s.profileInfoUploadLabel} htmlFor={'file-upload'}></label></div>}
                </div>
                <div className={s.contactMargin}>
                     {profile.fullName ? profile.fullName : 'no'}
                </div>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.profileFormField}>
                {editMode ? <ProfileDataForm profile={profile} handleSubmit={handleSubmit}/> :
                    <ProfileData profile={profile} goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={isOwner}/>}
            </div>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return ((contactValue)
        ? <div className={s.contactMargin}><b>{contactTitle}</b>: {contactValue}</div>
        : <></>);
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <hr/>
        <div className={s.contactInfo}>
            <b>Profile info</b>
        </div>
        <hr/>
        <div className={s.contactMargin}>
            <b>Looking for a job: </b> <div className={profile.lookingForAJob ? s.contactActiveJob : s.contactDisableJob}></div>
        </div>
        {profile.lookingForAJob &&
            <div className={s.contactMargin}>
                <b>My professional skills: </b>
                {profile.lookingForAJobDescription
                    ? profile.lookingForAJobDescription
                    : 'no'}
            </div>
        }
        <div className={s.contactMargin}>
            <b>About me: </b> {profile.aboutMe ? profile.aboutMe : 'no'}
        </div>
        <hr/>
        <div className={s.contactSocialNetworks}>
            <b>Social networks</b>
        </div>
        <hr/>
        <div className={s.contactMargin}>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
        {isOwner && <div className={s.contactButtonPosition}>
            <button className={s.contactButton} onClick={goToEditMode}>Edit</button>
        </div>}
    </div>
}

export default ProfileInfo;