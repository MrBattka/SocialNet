import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);
window.store = store;

export default store;