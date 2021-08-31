import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateTopProps = (state) => {
    console.log(state.auth.isAuth)
    return {
        messagePage: state.messagePage,
        isAuth:state.auth.isAuth
    };
};
const mapDispatchToProps = (dispatch) => ({
        changeInputValue: (e) => {
            const text = e.target.value;
            dispatch({ type: 'ADD-NEW-MESSAGE', newDialogMessage: text });
        },
         sendMessage: () => {
            dispatch({ type: 'SEND_MESSAGE' });
         },
    });
const DialogsContainer = connect(mapStateTopProps, mapDispatchToProps)(Dialogs); // делает свою перерисовку и не только
export default DialogsContainer;
