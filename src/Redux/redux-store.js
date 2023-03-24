import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";
import thankMiddleware from "redux-thunk";
import { reducer as formReduser } from "redux-form";
import appReduser from "./app-reduser";
import { composeWithDevTools } from "@redux-devtools/extension";
import settingPageRedusers from "./settingComponent-reduser";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
    settingPage: settingPageRedusers,
    auth: authReduser,
    form: formReduser,
    app: appReduser
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['settingPage']
};
const pReducer = persistReducer(persistConfig, reducers);

export let store = createStore(pReducer,
    composeWithDevTools(applyMiddleware(thankMiddleware)))

export const persistor = persistStore(store)