import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Viktor" id="2"/>
                <DialogItem name="Denis" id="3"/>
                <DialogItem name="Aleksandr" id="4"/>
                <DialogItem name="Nasty" id="5"/>
                <DialogItem name="Vika" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Welcome"/>
                <Message message="Nobody"/>
            </div>
        </div>
    )
}

export default Dialogs;