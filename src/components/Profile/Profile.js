import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'

function Profile() {
    return (
        <div className="content">
            <div>
                <div className={s.descriptionBlock}>
                    Ava + descr1
                </div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile