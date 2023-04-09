import React from 'react';
import s from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Header = ({isAuth,login,logout}) => {

    let navigate = useNavigate();

    const handleOnClick = async () => {
       await logout();
       navigate('/login');
    }

    return <header className={s.header}>
        <div className={s.loginBlock}>
            {isAuth
                ? <div>{login} - <button onClick={handleOnClick}>Log out</button></div>
           :<NavLink to={'/login'} >Login</NavLink>}
        </div>
    </header>
}

export default Header;