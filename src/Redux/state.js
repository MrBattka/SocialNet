import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";

let store = {
  _callSubscriber() {
    console.log('state changed');
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
  // _state: {
  //   // profilePage: {
  //   //   posts: [
  //   //   ],
  //   //   newPostText: ''
  //   // },
  //   // dialogsPage: {
  //   //   dialogs: [
  //   //   ],
  //   //   messages: [
  //   //     { id: 1, message: '' }
  //   //   ],
  //   //   newMessageText: ''
  //   // }
  // },

  getState() {return this._state},
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.state = store;

export default store;