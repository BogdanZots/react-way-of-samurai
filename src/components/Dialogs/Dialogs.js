import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"
import {addNewMessage} from '../../redux/state.js'




function DialogItem(props) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id} key={props.key}>{props.name}</NavLink>
        </div>
    )
}
function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(item=><DialogItem key={item.id} id={item.id} name={item.name}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsMessages.map(item=><Message key={item.id} message={item.message}/>)}
            </div>
            <textarea  onChange={}  value={}></textarea>
            <button onClick={addNewMessageUI}>Add message</button>
        </div>
    )
}

export default Dialogs