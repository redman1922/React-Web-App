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
                <div>
                    <b>Full name:</b>
                    <Field
                        name="fullName"
                        type='text'
                        placeholder={'Full name'}
                    />
                </div>
                <div>
                    <b>Looking for a job:</b>
                    <Field
                        name="lookingForAJob"
                        type='checkbox'
                    />
                </div>
                <div>
                    <b>My professional skills:</b>
                    <Field
                        name="lookingForAJobDescription"
                        type='textarea'
                        placeholder={'My professional skills'}
                    />
                </div>
                <div>
                    <b>About me:</b>
                    <Field
                        name="aboutMe"
                        type='textarea'
                        placeholder={'About me'}
                    />
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}><b>{key}:</b>
                        <Field
                            name={`contacts.${key}`}
                            type='text'
                            placeholder={key}
                        />
                    </div>
                })}
                </div>
                <div>
                    <button type="submit">save</button>
                </div>
            </Form>
        )}
    </Formik>
}

export default ProfileDataForm;