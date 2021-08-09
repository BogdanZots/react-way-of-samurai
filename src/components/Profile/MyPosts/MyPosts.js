import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

let newPostElement = React.createRef()


function MyPosts(props) {

    function addPost(){
        let text = newPostElement.current.value
        props.addPost(text)
        console.log(props)
    }

    
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add button</button>
                </div>
            </div>
            <div className="posts">
                {props.posts.map(item=><Post message={item.message} key={item.id} likeCount={item.likeCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts