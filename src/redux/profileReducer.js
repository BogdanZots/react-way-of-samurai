const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [{
            id: 1,
            message: 'My first message(Post)',
            likeCount: '5'
        },
        {
            id: 2,
            message: 'My second message(Post)',
            likeCount: '10'
        },
        {
            id: 3,
            message: 'My third message(Post)',
            likeCount: '15'
        }
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return {
            ...stateCopy
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newPostText;
        return {
            ...stateCopy
        }
    }
    return {
        ...state
    }
}