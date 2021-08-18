import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
/* import {addPostActionCreator,updateNewPostActionCreator} from '../../../redux/state.js' */

let newPostElement = React.createRef()


function MyPosts(props) {
    console.log(props)
    let addPost = ()=>{
        props.dispatch({
            type : "ADD-POST"
        })
    }
    function onPostChange() {
        let text = newPostElement.current.value
        props.dispatch({
            type:'UPDATE-NEW-POST-TEXT',
            newPostText : text
        })
    }
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add button</button>
                </div>
            </div>
            <div className="posts">
                {props.posts.map(item =><Post message = {
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
    )
}

export default MyPosts