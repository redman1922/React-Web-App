import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'


const LoginFrom = (props) => {
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
            onSubmit={(formData, {setSubmitting,setStatus}) => {
                props.login(formData.email, formData.password, formData.rememberMe,setStatus);
                setSubmitting(false);
            }}
        >
            {({errors, touched,status}) => (

                <Form>
                    {status && <div className={s.error}>{status}</div>}
                    <div><ErrorMessage name="email"/></div>
                    <div><Field
                        name="email"
                        validate={validateLogin}
                        placeholder={'Email'}
                    /></div>
                    <div><ErrorMessage name="password"/></div>
                    <div><Field name="password"
                                type="password"
                                placeholder={'Пароль'}
                                validate={validatePassword}/></div>
                    <div><Field name="rememberMe"

                                type="checkbox"/>rememberMe
                    </div>

                    <button type="submit">Submit</button>

                </Form>

            )}
        </Formik>
    )
}

const Login = (props) => {


    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginFrom login={props.login}/>
    </div>
}

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {login})(Login);