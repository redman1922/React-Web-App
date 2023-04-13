import s from './Footer.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Footer = () => {

    return <div className={s.footerContent}>
        <ul className={s.footerList}>
            <li><NavLink className={s.footerLink} to="/profile">Profile</NavLink></li>
            <li><NavLink className={s.footerLink} to='/dialogs'>Messages</NavLink></li>
            <li><NavLink className={s.footerLink} to='/users'>Users</NavLink></li>
        </ul>
        <div>
            <a href="https://github.com/redman1922" target="_blank">
                <img className={s.footerIconSocial}
                     src="https://flyclipart.com/thumb2/github-png-icon-free-download-813498.png" alt="iconGithub"/>
            </a>
            <a href="https://github.com/redman1922" target="_blank">
                <img className={s.footerIconSocial} src="https://invest-brands.cdn-tinkoff.ru/US42207L1061x640.png"
                     alt="iconHh"/>
            </a>
        </div>
    </div>
}

export default Footer;