import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Nasty'},
        {id: 6, name: 'Viktoria'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Welcome'},
        {id: 4, message: 'Nobody'}
    ];

    let dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = messages.map(m =>
        <Message message={m.message}/>
    );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;