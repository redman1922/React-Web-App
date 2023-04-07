    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItem from "./DialogItem/DialogItem";
    import Message from "./Message/Message";
    import {ErrorMessage, Field, Form, Formik} from "formik";

    const Dialogs = (props) => {

        let state = props.dialogsPage;

        let dialogsElements = state.dialogs.map(d =>
            <DialogItem key={d.id} name={d.name} id={d.id}/>
        );

        let messagesElements = state.messages.map(m =>
            <Message key={m.id} message={m.message}/>
        );

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageDialogsFrom sendMessageCreator={props.sendMessageCreator}/>
            </div>
        )
    }

    const AddMessageDialogsFrom = (props) =>{

        return (
            <Formik
                initialValues={{
                    newMessageBody: '',
                }}
                onSubmit={values => {
                    props.sendMessageCreator(values.newMessageBody);
                }}
            >
                {() => (
                    <Form>
                        <div><ErrorMessage name="newMessageBody"/></div>
                        <div><Field
                            name="newMessageBody"
                            type="textarea"
                            placeholder='Enter your message'
                        /></div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        );
    }

    export default Dialogs;