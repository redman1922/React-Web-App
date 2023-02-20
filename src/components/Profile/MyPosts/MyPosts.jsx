import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // let posts = [
    //     {id:1, message:'Hi, how are you?', like:15},
    //     {id:2, message:'It\'s my first post', like:20},
    //     {id:3, message:'It\'s my first post', like:24}
    // ];

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)

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
            {postsElements}
        </div>
    </div>
}

export default MyPosts;