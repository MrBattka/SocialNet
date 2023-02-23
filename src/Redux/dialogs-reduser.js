const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Nick 1' },
    { id: 2, name: 'Nick 2' },
    { id: 3, name: 'Nick 3' },
    { id: 4, name: 'Nick 4' },
    { id: 5, name: 'Nick 5' }
  ],
  messages: []
}

window.initialState = initialState;

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: action.id, message: body}] 
      }
    default:
      return state;
  }
}

export const sendMessageAC = (newMessageBody, id) => ({ type: SEND_MESSAGE, newMessageBody, id })
export default dialogsReduser;