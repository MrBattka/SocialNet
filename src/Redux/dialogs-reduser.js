import persistReducer from "redux-persist/es/persistReducer";
import { dialogsAPI } from "../api/api";
import storage from "redux-persist/lib/storage";

const SEND_MESSAGE = "SEND-MESSAGE";
const SET_DIALOGS = "SET_DIALOGS";
const SET_PHOTOS = "SET_PHOTOS";

let initialState = {
  dialogs: [],
  messages: [],
  photos: [],
  id: "",
};

window.initialState = initialState;

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["dialogs", "photos"],
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      };
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: action.dialog,
      };
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.photo,
      };
    default:
      return state;
  }
};

export const setMessages = (messages) => ({
  type: SEND_MESSAGE,
  messages,
});
export const setDialogs = (dialog) => ({ type: SET_DIALOGS, dialog });
export const setPhotos = (photo) => ({ type: SET_PHOTOS, photo });

export const getDialogs = () => async (dispatch) => {
  let response = await dialogsAPI.requestGetDialogs();
  dispatch(setDialogs(response.data));
};


export const getMessages = () => async (dispatch) => {
  let response = await dialogsAPI.requsetGetMessages();
  dispatch(setMessages(response.data));
};

export const getPhotos = () => async (dispatch) => {
  let response = await dialogsAPI.requsetGetPhotos();
  dispatch(setPhotos(response.data));
};

export default persistReducer(persistConfig, dialogsReduser);