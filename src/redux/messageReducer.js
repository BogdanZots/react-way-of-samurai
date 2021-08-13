const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

 export const messageReducer = (state, action) => {
    if (action.type === ADD_NEW_MESSAGE) {
        state.newDialogMessage = action.newMessageText
    } else if (action.type === SEND_MESSAGE) {
        state.dialogsMessages.push({
            id: state.dialogsMessages.length + 1,
            message: state.newDialogMessage
        })
    }
    return {
        state
    }
}
