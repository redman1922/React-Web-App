import React, {useState} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {getIsAuth} from "../../redux/selectors/profile-selector";
import {getLogin} from "../../redux/selectors/header-selector";
import {connect} from "react-redux";

const Navbar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (<nav className={s.navMenu}>

            <div className={s.navBurgerSize} onClick={handleMenu}><span className={s.navBurger}></span></div>
            <div
                className={openMenu ? `${s.navBurgerTransform} ${s.navActiveBurgerTransform}` : `${s.navBurgerTransform}`}
                onClick={() => setOpenMenu(false)}
            >
                <div className={s.navBurgerContent} onClick={e => e.stopPropagation()}>
                    {props.isAuth
                        ? <div className={s.navUserNameMobileVersion}><b>Welcome: {props.login}</b></div>
                        : <></>
                    }
                    <div className={s.item}>
                        <NavLink onClick={() => setOpenMenu(false)}
                                 className={({isActive}) => isActive ? s.active : undefined}
                                 to="/profile">Profile</NavLink>
                    </div>
                    <div className={`${s.item} ${s.navItemsMargin}`}><NavLink onClick={() => setOpenMenu(false)}
                                                     className={({isActive}) => isActive ? s.active : undefined}
                                                     to='/dialogs'>Messages</NavLink></div>
                    <div className={s.item}><NavLink onClick={() => setOpenMenu(false)}
                                                     className={({isActive}) => isActive ? s.active : undefined}
                                                     to='/users'>Users</NavLink></div>
                </div>
            </div>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink className={({isActive}) => isActive ? s.active : undefined}
                             to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}><NavLink className={({isActive}) => isActive ? s.active : undefined}
                                                 to='/dialogs'>Messages</NavLink></div>
                <div className={s.item}><NavLink className={({isActive}) => isActive ? s.active : undefined}
                                                 to='/users'>Users</NavLink></div>
            </div>

        </nav>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}

export default connect(mapStateToProps, {})(Navbar);