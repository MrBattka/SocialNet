const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const RESET_NEW_POST_TEXT = 'RESET-NEW-POST-TEXT'

let initialState = {
  posts: [],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1,
        message: state.newPostText
      };
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      const newState = { ...state, newPostText: action.newText }
      state.newPostText = action.newText;
      return newState;
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;