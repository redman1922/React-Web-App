import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/user-default.jpg'

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            fetch('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => response.json())
                .catch(err => console.log(err))
                .then(result => {
                    props.setUsers(result.items)
                });
        }
    }
    return (<div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(user => <div key={user.id}>
                <div>
                    <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
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

    )

}

export default Users;