const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let posts = [{
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
]
let dialogsData = [{
        id: 1,
        name: "Dimych"
    },
    {
        id: 2,
        name: "Igor"
    },
    {
        id: 3,
        name: "Vlad"
    },
    {
        id: 4,
        name: "Mark"
    },
    {
        id: 5,
        name: "Gosha"
    }

]

let dialogsMessages = [{
        id: 1,
        message: 'Test message1'
    },
    {
        id: 2,
        message: 'Test message2'
    },
    {
        id: 3,
        message: 'Test message3'
    },
]


let store = {
    _state: {
        profilePage: {
            posts,
            newPostText: ''
        },
        dialogsPage: {
            dialogsMessages,
            dialogsData,
            newDialogMessage:''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            console.log(this._state.profilePage.newPostText)
           /*  this._callSubscriber() */
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._state.dialogsPage.newDialogMessage = action.newMessage
            console.log(this._state.dialogsPage.newDialogMessage)
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const addNewMessage = (newMessage) => {
    return {
        type: ADD_NEW_MESSAGE,
        newMessage: newMessage
    }
}

export default store