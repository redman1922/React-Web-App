import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";
import{memo} from "react";

const MyPosts = memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostForm addPost={props.addPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
});

const AddNewPostForm = (props) => {


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

                    /></div>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default MyPosts;