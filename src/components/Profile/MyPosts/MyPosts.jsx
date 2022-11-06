import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?' like='15'/>
            <Post message="It's my first post" like='20'/>
            <Post message="It's my first post" like='24'/>
        </div>
    </div>
}

export default MyPosts;