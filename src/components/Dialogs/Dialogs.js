import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"
import {addNewMessage} from '../../redux/store.js'


function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function DialogItem(props) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id} key={props.key} id={props.id} name={props.name}>{props.name}</NavLink>
        </div>
    )
}


function Dialogs(props) {
    console.log('props in dialogs is',props)
    function  changeInputValue(e) {
        let text = e.target.value
        props.dispatch({
            type:'ADD-NEW-MESSAGE',
            newMessageText:text
        })
    }
    function sendMessage() {
        props.dispatch({
            type:'SEND_MESSAGE'
        })
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map(item=><DialogItem key={item.id} id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>
                {props.state.dialogsMessages.map(item=><Message key={item.id} message={item.message}/>)}
            </div>
            <textarea onChange={(e)=>{changeInputValue(e)}} value={props.state.newDialogMessage}></textarea>
            <button onClick={sendMessage}>Add message</button>
        </div>
    )
}

export default Dialogs