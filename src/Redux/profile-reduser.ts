import { type } from 'os';
import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

type PostType = {
  id: number
  message: string
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotosType = {
  small: string | null
  large: string | null
}
type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

let initialState = {
  posts: [] as Array<PostType>,
  newPostText: '',
  profile: null as ProfileType | null,
  isFetching: true,
  status: ''
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let body = action.newPostText
      return {
        ...state,
        posts: [...state.posts, { id: 1, message: body }]
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

type AddPostACType = {
  type: typeof ADD_POST
  newPostText: string
}
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: string
}
type SetProfileStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const addPostAC = (newPostText: string): AddPostACType => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile: string): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status: string): SetProfileStatusType => ({ type: SET_STATUS, status })

export const getProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getProfileStatus = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfileStatus(userId)
  dispatch(setProfileStatus(response.data))
}
export const updateProfileStatus = (status: string) => async (dispatch: any) => {
  let response = await usersAPI.updateProfileStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}

export default profileReducer;