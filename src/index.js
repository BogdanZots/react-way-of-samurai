import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store.js'
import {Provider} from 'react-redux'

export function rerenderEntireTree() {
    console.log(store)
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
}) // redux.connect - делает свой subscribe и не только
