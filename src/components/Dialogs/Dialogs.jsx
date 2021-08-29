import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = ({ messagePage, changeInputValue, sendMessage }) => {
    function Message({ message }) {
        return (
          <div className={s.message}>{message}</div>
        );
    }

    function DialogItem({ id, key, name }) {
        return (
          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`} key={key} id={id} name={name}>
              {name}
            </NavLink>
          </div>
        );
    }
    return (
      <div>
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            {messagePage
                        .dialogsData
                        .map((item) => (<DialogItem key={item.id} id={item.id} name={item.name} />))}
          </div>
          <div className={s.messages}>
            {messagePage
                        .dialogsMessages
                        .map((item) => (<Message key={item.id} message={item.message} />))}
          </div>
          <textarea
            onChange={(e) => {
                    changeInputValue(e);
                }}
            value={messagePage.newDialogMessage}
          />
          <button type="button" onClick={sendMessage}>Add message</button>
        </div>
      </div>
    );
};

export default Dialogs;
