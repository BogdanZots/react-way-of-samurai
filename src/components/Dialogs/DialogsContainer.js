import React from "react"
import {connect} from "react-redux"
import Dialogs from "./Dialogs.js"

const mapStateTopProps = (state) => {
    console.log(state)
    return {
        messagePage:state.messagePage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue:(e)=>{
            let text = e.target.value
            dispatch({type: 'ADD-NEW-MESSAGE', newDialogMessage: text})
        },
         sendMessage:()=>{
            dispatch({type: 'SEND_MESSAGE'})
         }
    }
}
const DialogsContainer = connect(mapStateTopProps,mapDispatchToProps)(Dialogs) // делает свою перерисовку и не только
export default DialogsContainer
  