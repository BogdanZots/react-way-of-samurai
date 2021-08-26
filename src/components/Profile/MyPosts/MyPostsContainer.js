import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateTopProps = (state)=>{
    return{
        profilePage:state.profilePage
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
            onPostChange:(e)=> {
            let text = e.target.value
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: text})
            },
             addPost:() => {
                 console.log('add post')
                dispatch({type:"ADD-POST"})
            }
        }
    }

const myPostsContainer = connect(mapStateTopProps,mapDispatchToProps)(MyPosts)

export default myPostsContainer