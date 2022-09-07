const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const RESET_NEW_MESSAGE_TEXT = 'RESET_NEW_MESSAGE_TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Nick 1' },
    { id: 2, name: 'Nick 2' },
    { id: 3, name: 'Nick 3' },
    { id: 4, name: 'Nick 4' },
    { id: 5, name: 'Nick 5' },
  ],
  messages: [
    { message: 'Hi, world' }
  ],
  newMessageText: ''
}

window.initialState = initialState;

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newSendMessage = {
        id: 1,
        message: state.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newSendMessage]
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    case RESET_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText}
    default:
      return state;
  }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAC = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export const resetNewMessageTextAC = () => 
  ({ type: RESET_NEW_MESSAGE_TEXT, newText: '' })

export default dialogsReduser;