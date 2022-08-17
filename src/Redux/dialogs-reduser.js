
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Nick 1' },
    { id: 2, name: 'Nick 2' },
    { id: 3, name: 'Nick 3' },
    { id: 4, name: 'Nick 4' },
    { id: 5, name: 'Nick 5' }
  ],
  messages: [
    { id: 1, message: 'Hi, world' }
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
      state.messages.push(newSendMessage);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReduser;