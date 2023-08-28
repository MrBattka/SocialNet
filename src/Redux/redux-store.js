import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as formReduser } from "redux-form";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import headerRedusers from "./Mobile/header-reduser";
import appReduser from "./app-reduser";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import settingPageRedusers from "./settingComponent-reduser";
import usersReduser from "./users-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReduser,
  settingPage: settingPageRedusers,
  auth: authReduser,
  form: formReduser,
  app: appReduser,
  mobHeader: headerRedusers,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["settingPage", "dialogsPage"],
  // blacklist: ['profilePage']
};
const pReducer = persistReducer(persistConfig, reducers);

const middleware = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};

export let store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
