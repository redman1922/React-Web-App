import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {memo} from "react";

const MyPosts = memo(props => {
    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} like={p.like}/>);

    return <div className={s.profilePostsUserPosition}>
        <div className={s.profilePostsUser}>
            <hr/>
            <h3 className={s.postsMyPosts}>My posts</h3>
            <hr/>
            <AddNewPostForm addPost={props.addPost}/>
        </div>
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
                values.newPostText = '';
            }}
        >
            {() => (
                <Form>
                    <div><ErrorMessage name="newPostText"/></div>
                    <div className={s.postsNewPost}><Field
                        name="newPostText"
                        type="text"
                        placeholder='New post'
                        className={s.postsNewPostInput}
                    />
                        <button className={s.postsNewPostButton} type="submit"></button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default MyPosts;