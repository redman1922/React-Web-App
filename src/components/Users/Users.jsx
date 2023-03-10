import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user-default.jpg";
import {NavLink} from "react-router-dom";

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
                        ? <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
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