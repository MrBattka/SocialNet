const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'Its my first post' },
    { id: 3, message: 'Hi, world' },
    { id: 4, message: 'React its cool' }
  ],
  newPostText: ''
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText
      };
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) => 
      ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReduser;