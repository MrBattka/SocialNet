import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser
});

let store = createStore(reducers);
window.store = store;

export default store;