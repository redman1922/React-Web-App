import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://i.ytimg.com/vi/otZ_ofVAldY/maxresdefault.jpg'></img>
        </div>
        <div className={s.descriptionBlock}>
            <img
                src='https://sun9-68.userapi.com/impf/l6hluAtarXzDz3UlKIp0U3acT4WXxwqmCuAx1Q/v8vs2c67V6s.jpg?size=320x320&quality=96&sign=e754b7a030f85b07c8824ebaee67bcdc&c_uniq_tag=MEoCyvujdVu1reHvvey6J3iDlkyRUrCnYkERRsKqIfw&type=album'></img>
            + descripsion
        </div>
    </div>
}

export default ProfileInfo;