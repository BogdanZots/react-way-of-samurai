import { combineReducers, createStore } from "redux";
import {messageReducer} from './messageReducer'
import { profileReducer } from "./profileReducer";

let redusers = combineReducers({
    profileReducer : profileReducer,
    messageReducer : messageReducer
})

let store = createStore(redusers);

export default store