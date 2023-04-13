import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user-default.jpg";
import {NavLink} from "react-router-dom";

const   User = ({user,followingInProgress,unfollow,follow}) => {

    return <div className={s.wrapperUser}>
                <div >
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}  alt="User"/>
                    </NavLink>
                </div>
                <div className={s.userNames}><b>Name: </b>{user.name}</div>
                <div className={s.userStatus}><b>Status: </b>{(!user.status) ? `none` : user.status}</div>
        <div>
            {user.followed
                ?  <button className={s.userButton} disabled={followingInProgress.some(id => id === user.id)}
                           onClick={() => {unfollow(user.id);}}>Unfollow</button>

                : <button className={s.userButton} disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {follow(user.id);}}>Follow</button>
            }
        </div>
            </div>
}

export default User;