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
    case ADD_POST: 
      let newPost = {
        id: 1,
        message: state.newPostText
      };
      return { ...state,
        posts: [...state.posts, newPost]
      }
    case UPDATE_NEW_POST_TEXT: 
      return { ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;