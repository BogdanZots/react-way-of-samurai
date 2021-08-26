import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const Dialogs = (props) => {
    console.log(props)
    function Message(props) {
        return (
            <div className={s.message}>{props.message}</div>
        )
    }

    function DialogItem(props) {
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink
                    to={"/dialogs/" + props.id}
                    key={props.key}
                    id={props.id}
                    name={props.name}>{props.name}</NavLink>
            </div>
        )
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props
                        .messagePage
                        .dialogsData
                        .map(item =>< DialogItem key = {
                            item.id
                        }
                        id = {
                            item.id
                        }
                        name = {
                            item.name
                        } />)}
                </div>
                <div className={s.messages}>
                    {props
                        .messagePage
                        .dialogsMessages
                        .map(item =>< Message key = {
                            item.id
                        }
                        message = {
                            item.message
                        } />)}
                </div>
                <textarea
                    onChange={(e) => {
                    props.changeInputValue(e)
                }}
                    value={props.messagePage.newDialogMessage}></textarea>
                <button onClick={props.sendMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;
