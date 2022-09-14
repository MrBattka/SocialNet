import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const RESET_NEW_POST_TEXT = 'RESET_NEW_POST_TEXT'

let initialState = {
  posts: [],
  newPostText: '',
  profile: null,
  isFetching: true
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 1,
        message: state.newPostText
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case RESET_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state;
  }
}

export const addPostAC = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextAC = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const resetNewPostTextAC = () =>
  ({ type: RESET_NEW_POST_TEXT, newText: '' })

export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export default profileReducer;