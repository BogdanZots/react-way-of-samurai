import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    console.log(props)
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        onChange={props.onPostChange}
                        value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add button</button>
                </div>
            </div>
            <div className="posts">
                {props
                    .profilePage
                    .posts
                    .map(item =>< Post message = {
                        item.message
                    }
                    key = {
                        item.id
                    }
                    likeCount = {
                        item.likeCount
                    } />)}
            </div>
        </div>
    );
}

export default MyPosts;
