import { dialogsAPI } from "../api/api";

const SEND_MESSAGE = "SEND-MESSAGE";
const SET_DIALOGS = "SET_DIALOGS";
const SET_PHOTOS = "SET_PHOTOS"

let initialState = {
  dialogs: [],
  messages: [],
  photos: [],
  id: "",
};

window.initialState = initialState;

// const [dialogs, setDialogs] = useState([]);
//   const [photos, setPhotos] = useState([]);
//   const [id, setId] = useState("");

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: action.id, message: body }],
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

export const sendMessageAC = (newMessageBody, id) => ({
  type: SEND_MESSAGE,
  newMessageBody,
  id,
});
export const setDialogs = (dialog) => ({ type: SET_DIALOGS, dialog });
export const setPhotos = (photo) => ({ type: SET_PHOTOS, photo })

export const getMessages = () => async (dispatch) => {
  let response = await dialogsAPI.requestGetDialogs();
  dispatch(setDialogs(response.data));
};

export const getPhotos = () => async (dispatch) => {
  let response = await dialogsAPI.requsetGetPhotos();
  dispatch(setPhotos(response.data));
};


export default dialogsReduser;
