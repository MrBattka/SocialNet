import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
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
        posts: [...state.posts, {id: 1, message: body}] 
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}
export const getProfileStatus = (userId) => {
  return (dispatch) => {
    usersAPI.getProfileStatus(userId)
    .then(data => {
      dispatch(setProfileStatus(data))
    })
  }
}
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    usersAPI.updateProfileStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
      }
    })
  }
}

export default profileReducer;