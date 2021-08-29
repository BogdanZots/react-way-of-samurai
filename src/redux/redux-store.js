import { combineReducers, createStore } from 'redux';
import { messageReducer } from './messageReducer';
import { profileReducer } from './profileReducer';
import usersReducer from './users-reducers.ts';

const redusers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer,
});
const store = createStore(redusers);
export default store;
