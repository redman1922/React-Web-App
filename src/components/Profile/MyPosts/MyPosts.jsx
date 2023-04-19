import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {memo} from "react";

const MyPosts = memo(props => {
    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} like={p.like}/>);

    return <div className={s.profilePostsUser}>
        <div>
            <hr style={{width:`100%`}}/>
            <h3 className={s.postsMyPosts}>My posts</h3>
            <hr/>
        </div>

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
            {() => (
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