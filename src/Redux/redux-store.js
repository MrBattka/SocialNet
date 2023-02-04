import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";
import thankMiddleware from "redux-thunk";
import { reducer as formReduser } from "redux-form";
import appReduser from "./app-reduser";
import { composeWithDevTools } from "@redux-devtools/extension";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReduser,
    app: appReduser
});

let store = createStore(reducers,
    composeWithDevTools(applyMiddleware(thankMiddleware)))

window.store = store;

export default store;