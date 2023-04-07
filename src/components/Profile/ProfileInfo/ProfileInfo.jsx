import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user-default.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto,saveProfile}) => {

    const [editMode,setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelectedOn = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
        console.log(e.target.files[0])
    }

    const handleSubmit = (formData,setStatus) => {
        saveProfile(formData,setStatus).then(()=>{
            setEditMode(false);
        } )
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>+ descripsion
            {isOwner && <input type={"file"} onChange={mainPhotoSelectedOn}/>}
            {editMode ? <ProfileDataForm profile={profile} handleSubmit={handleSubmit} />: <ProfileData profile={profile} goToEditMode={() => {setEditMode(true)}} isOwner={isOwner}/>}
        </div>
        <ProfileStatusWithHooks isOwner={isOwner}  status={status} updateStatus={updateStatus}/>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({profile,isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name: </b> {profile.fullName ? profile.fullName : 'no'}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>
                {profile.lookingForAJobDescription
                ? profile.lookingForAJobDescription
                : 'no'}
            </div>
        }
        <div>
            <b>About me: </b> {profile.aboutMe ? profile.aboutMe : 'no'}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export default ProfileInfo;