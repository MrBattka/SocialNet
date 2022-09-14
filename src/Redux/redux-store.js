import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";
import thankMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(reducers, applyMiddleware(thankMiddleware));
window.store = store;

export default store;