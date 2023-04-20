import React from "react";
import {Field, Form, Formik} from "formik";
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit,profile}) => {
    return <Formik
        initialValues={profile}
        onSubmit={(formData,{setSubmitting,setStatus}) => {
            handleSubmit(formData,setStatus);
            setSubmitting(false);
        }}
    >
        {({status}) => (
            <Form>
                {status && <div className={s.error}>{status}</div>}
                <div className={s.contactFormText}>
                    <b>Full name: </b>
                    <Field
                        name="fullName"
                        type='text'
                        placeholder={'Full name'}
                        className={s.contactFormInput}
                    />
                </div>
                <div className={s.contactFormText}>
                    <b>Looking for a job: </b>
                    <Field
                        name="lookingForAJob"
                        type='checkbox'
                        className={s.contactFormInput}
                    />
                </div>
                <div className={s.contactFormText}>
                    <b>My professional skills: </b>
                    <Field
                        name="lookingForAJobDescription"
                        type='textarea'
                        placeholder={'My professional skills'}
                        className={s.contactFormInput}
                    />
                </div>
                <div className={s.contactFormText}>
                    <b>About me: </b>
                    <Field
                        name="aboutMe"
                        type='textarea'
                        placeholder={'About me'}
                        className={s.contactFormInput}
                    />
                </div>
                <div>
                     {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contactFormText}><b>{key}: </b>
                        <Field
                            name={`contacts.${key}`}
                            type='text'
                            placeholder={key}
                            className={s.contactFormInput}
                        />
                    </div>
                })}
                </div>
                <div>
                    <button className={s.contactButton} type="submit">save</button>
                </div>
            </Form>
        )}
    </Formik>
}

export default ProfileDataForm;