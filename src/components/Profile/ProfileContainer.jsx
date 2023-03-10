import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";

class ProfileContainer extends React.Component{
    render() {
        return <div className={s.content}>
            <Profile {...this.props}/>
        </div>
    }
}

export default ProfileContainer;