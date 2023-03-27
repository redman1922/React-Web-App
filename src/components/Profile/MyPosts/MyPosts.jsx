import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    const onAddPost = () =>{
        props.addPost();
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostForm addPost={props.addPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

const AddNewPostForm = (props) => {

    const validateNewMessage = (newPostText) =>{
        if(!newPostText){
            return 'Нужно заполнить поле!'
        }
    }


    return (
        <Formik
            initialValues={{
                newPostText: '',
            }}
            onSubmit={values => {
                props.addPost(values.newPostText);

            }}
        >
            {({errors, touched}) => (
                <Form>
                    <div><ErrorMessage name="newPostText"/></div>
                    <div><Field
                        name="newPostText"
                        type="text"
                        placeholder='Enter your message'
                        validate={validateNewMessage}
                    /></div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default MyPosts;