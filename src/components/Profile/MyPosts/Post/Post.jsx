import React from 'react';
import s from './Post.module.css';

const    Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://d1a0n9gptf7ayu.cloudfront.net/cache/79/ba/79ba41a9a8915fb30952ebf9ae8949b5.jpg'></img>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;