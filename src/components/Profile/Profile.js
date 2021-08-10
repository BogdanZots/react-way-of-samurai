import React from 'react'
import { updateNewPostText } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile(props) {
    console.log(props.profilePage.posts)
    return (
        <div className="content">
            <div>
                <div className={s.descriptionBlock}>
                    Ava + descr
                </div>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile