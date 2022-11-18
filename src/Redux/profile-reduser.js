import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [],
  newPostText: '',
  profile: null,
  isFetching: true,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let body = action.newPostText
      return {
        ...state,
        posts: [...state.posts, { id: 1, message: body }]
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getProfileStatus = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfileStatus(userId)
  dispatch(setProfileStatus(response.data))
}
export const updateProfileStatus = (status) => async (dispatch) => {
  let response = await usersAPI.updateProfileStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}

export default profileReducer;