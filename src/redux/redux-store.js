import { combineReducers, createStore } from "redux";
import {messageReducer} from './messageReducer'
import { profileReducer } from "./profileReducer";
import usersReducer from "./users-reducers";

let redusers = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    usersPage : usersReducer
})
let store = createStore(redusers);
export default store