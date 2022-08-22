import Posts from "../components/Content/Posts/posts";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const RESET_NEW_POST_TEXT = 'RESET-NEW-POST-TEXT'

let initialState = {
  posts: [],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText
      };
      let newState = { ...state }
      newState.posts = [...state.posts]
      newState.posts.push(newPost);
      console.log(newState, ' scss');
      return newState;
    }
    case UPDATE_NEW_POST_TEXT: {
      const newState = { ...state }
      newState.newPostText = [...state.newPostText]
      newState.newPostText = action.newText;
      return newState;
    }
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;