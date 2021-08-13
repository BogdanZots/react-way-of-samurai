import {profileReducer} from './profileReducer.js'
import {messageReducer} from './messageReducer.js'

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
            newDialogMessage:'123'
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
     console.log(this._state)
     /* this._state.profilePage = */ profileReducer(this._state.profilePage,action)
   /*   this._state.dialogsPage =  */  messageReducer(this._state.dialogsPage,action)
     this._callSubscriber(this._state)
     console.log(this._state)
    }
}
/* export const addPostActionCreator = () => {
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
export const addNewMessage = (newMessageText) => {
    return {
         type: ADD_NEW_MESSAGE,
        newMessageText: newMessageText 
    }
} */
export default store