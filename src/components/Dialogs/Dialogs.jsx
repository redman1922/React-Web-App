    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItem from "./DialogItem/DialogItem";
    import Message from "./Message/Message";
    import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
    import {Navigate} from "react-router-dom";

    const Dialogs = (props) => {

        let state = props.dialogsPage;

        let dialogsElements = state.dialogs.map(d =>
            <DialogItem key={d.id} name={d.name} id={d.id}/>
        );

        let messagesElements = state.messages.map(m =>
            <Message key={m.id} message={m.message}/>
        );

        let newMessageBody = state.newMessageBody;


        const onSendMessageClick = () => {
            props.sendMessageCreator();
        }

        const onNewMessageChange = (e) => {
            let body = e.target.value;
            props.updateNewMessageBody(body);
        }

        if (!props.isAuth) return <Navigate to={'/login'}/>;

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        )
    }

    export default Dialogs;