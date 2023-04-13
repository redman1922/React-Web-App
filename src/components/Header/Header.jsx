import React from 'react';
import s from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Header = ({isAuth,login,logout}) => {

    let navigate = useNavigate();

    const handleOnClick = async () => {
       await logout();
       navigate('/login');
    }

    return<div>
            {isAuth
                ? <div ><span className={s.headerNameUser}>{login}</span><button className={s.headerNameLogOutButton} onClick={handleOnClick}><b>Log out</b></button></div>
           :<NavLink className={s.headerNavLinkLogin} to={'/login'} >Login</NavLink>}
        </div>

}

export default Header;