import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import { messageReducer } from "./messageReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";

const redusers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(redusers,applyMiddleware(thunk));
window.store = store;
export default store;
