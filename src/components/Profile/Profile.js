import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile(props) {  
    return (
        <div className="content">
            <div>
                <div className={s.descriptionBlock}>
                Ava + descr
                </div>
               <MyPosts posts={props.posts} addPost={props.addPost}/>
            </div>
        </div>
    )
}

export default Profile