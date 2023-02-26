import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = props.state.messages.map(m =>
        <Message message={m.message}/>
    );

    let newMessageText = React.createRef();

    const addMessage = () => {
        let message = newMessageText.current.value;
        alert(message)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageText} />
            <button onClick={addMessage}>Нажми на меня</button>
        </div>
    )
}

export default Dialogs;