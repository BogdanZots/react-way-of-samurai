const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsMessages: [
        {
            id: 1,
            message: 'Test message1'
        }, {
            id: 2,
            message: 'Test message2'
        }, {
            id: 3,
            message: 'Test message3'
        }
    ],
    dialogsData: [
        {
            id: 1,
            name: "Dimych"
        }, {
            id: 2,
            name: "Igor"
        }, {
            id: 3,
            name: "Vlad"
        }, {
            id: 4,
            name: "Mark"
        }, {
            id: 5,
            name: "Gosha"
        }

    ],
    newDialogMessage: '123'
}

export const messageReducer = (state = initialState, action) => {
  let stateCopy = {
        ...state
    } 
    if (action.type === ADD_NEW_MESSAGE) {
        stateCopy.newDialogMessage = action.newDialogMessage
        return {
            ...stateCopy
        }
    } else if (action.type === SEND_MESSAGE) {
        stateCopy.dialogsMessages = [...state.dialogsMessages]
        stateCopy
            .dialogsMessages
            .push({
                id: stateCopy.dialogsMessages.length + 1,
                message: stateCopy.newDialogMessage
            })
            stateCopy.newDialogMessage=''
        return {
            ...stateCopy
        }
    }
    return {
        ...state
    }
}