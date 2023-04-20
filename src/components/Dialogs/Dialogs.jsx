import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d, index) =>
        <DialogItem key={index} name={d.name} id={d.id}/>
    );

    let messagesElements = state.messages.map((m, index) =>
        <Message key={index} message={m.message}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsersList}>
                <h1 className={s.dialogsTitleList}>List Users</h1>
                <hr/>
                {dialogsElements}
            </div>
            <div className={s.dialogsMessagesField}>
                <div className={s.dialogsMessagesParent}>
                    <div className={s.dialogsMessages}>
                        {messagesElements}
                    </div>
                </div>
                <hr style={{marginTop: 20, marginBottom: 20}}/>
                <AddMessageDialogsFrom sendMessageCreator={props.sendMessageCreator}/>
            </div>

        </div>
    )
}

const AddMessageDialogsFrom = (props) => {

    return (
        <Formik
            initialValues={{
                newMessageBody: '',
            }}
            onSubmit={values => {
                props.sendMessageCreator(values.newMessageBody);
                values.newMessageBody = '';
            }}
        >
            {() => (
                <Form>
                    <><ErrorMessage name="newMessageBody"/></>
                    <div className={s.dialogsForm}><Field
                        name="newMessageBody"
                        type="textarea"
                        placeholder='Enter your message'
                        className={s.dialogsInputForm}
                    />
                        <button className={s.dialogsInputButton} type="submit">Submit</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default Dialogs;