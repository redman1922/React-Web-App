import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user-default.jpg";
import {NavLink} from "react-router-dom";

const User = ({user,followingInProgress,unfollow,follow}) => {

    return <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?   <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {unfollow(user.id);}}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {follow(user.id);}}>Follow</button>
                    }
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </div>
}

export default User;