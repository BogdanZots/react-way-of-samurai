import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/redux-store';

export default function rerenderEntireTree() {
  console.log(store);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'),
  );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
}); // redux.connect - делает свой subscribe и не только
