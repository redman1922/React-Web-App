import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://i.ytimg.com/vi/otZ_ofVAldY/maxresdefault.jpg'></img>
        </div>
        <div>
            <img src='https://sun9-68.userapi.com/impf/l6hluAtarXzDz3UlKIp0U3acT4WXxwqmCuAx1Q/v8vs2c67V6s.jpg?size=320x320&quality=96&sign=e754b7a030f85b07c8824ebaee67bcdc&c_uniq_tag=MEoCyvujdVu1reHvvey6J3iDlkyRUrCnYkERRsKqIfw&type=album'></img>
            + descripsion
        </div>
        <div>
            My posts
            <div>New post</div>
            <div>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;