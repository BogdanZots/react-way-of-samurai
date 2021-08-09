import React from 'react'

function Post(props) {
    return (
        <div className="post item">
            <img className="avatarImg" src="https://schoolsw3.com/tryit/avatar.png"/>
            {props.message}
            <span> Like {props.likeCount}</span> 
        </div>
    )
}

export default Post