import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props   ) => {
    return <header className={s.header}>
        <img src='https://papik.pro/uploads/posts/2021-11/thumbs/1636199989_48-papik-pro-p-lotos-logotip-foto-53.jpg'></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
           :<NavLink to={'/login'} >Login</NavLink>}
        </div>
    </header>
}

export default Header;