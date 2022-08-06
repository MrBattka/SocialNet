import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let store = {
  _callSubscriber() {
    console.log('state changed');
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Its my first post' },
        { id: 3, message: 'Hi, world' },
        { id: 4, message: 'React its cool' }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Nick 1' },
        { id: 2, name: 'Nick 2' },
        { id: 3, name: 'Nick 3' },
        { id: 4, name: 'Nick 4' },
        { id: 5, name: 'Nick 5' }
      ],
      messages: [
        { id: 1, message: '' }
      ],
      newMessageText: ''
    }
  },

  getState() {return this._state},
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.state = store;

export default store;