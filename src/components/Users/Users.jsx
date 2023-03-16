import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user-default.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && styles.selecedPage}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}
                >{page}</span>
            })}
        </div>

        {props.users.map(user => <div key={user.id}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?   <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5e694a32-88c3-4d87-b810-2f2be13ba6bc"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5e694a32-88c3-4d87-b810-2f2be13ba6bc"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                    props.toggleFollowingProgress(false, user.id);
                                });

                        }}>Follow</button>


                    }
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </div>
        )}
    </div>
}

export default Users;