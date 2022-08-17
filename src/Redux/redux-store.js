import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
});

let store = createStore(reducers);

export default store;