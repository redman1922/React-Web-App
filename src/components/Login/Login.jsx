import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'


const LoginFrom = ({login}) => {
    const validateLogin = (email) => {
        if (!email) {
            return 'Нужно заполнить поле!'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            return 'Вы ввели не почту';
        }
    }

    const validatePassword = (password) => {
        if (!password) {
            return 'Нужно заполнить поле!'
        }
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={(formData, {setSubmitting, setStatus}) => {
                login(formData.email, formData.password, formData.rememberMe, setStatus);
                setSubmitting(false);
            }}
        >
            {({status}) => (

                <Form>
                    {status && <div className={s.error}>{status}</div>}
                    <div><ErrorMessage name="email"/></div>
                    <div><Field
                        className={s.loginInput}
                        name="email"
                        validate={validateLogin}
                        placeholder={'Email'}
                    /></div>
                    <div><ErrorMessage name="password"/></div>
                    <div><Field
                        className={s.loginInput}
                        name="password"
                        type="password"
                        placeholder={'Password'}
                        validate={validatePassword}/></div>
                    <div>rememberMe: <Field className={s.loginCheckbox} name="rememberMe"
                                type="checkbox"/>
                    </div>
                    <button className={s.loginButton} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

const Login = ({login, isAuth}) => {

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div className={s.loginPosition}>
        <h1 className={s.loginTitle}>Login Form</h1>
        <p className={s.loginText}>Email: free@samuraijs.com</p>
        <p className={s.loginText}>Password: free</p>
        <LoginFrom login={login}/>
    </div>
}

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {login})(Login);