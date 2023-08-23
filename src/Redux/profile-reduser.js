import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO_PROFILE = "SET_PHOTO_PROFILE";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [],
  id: 0,
  newPostText: "",
  profile: null,
  isFetching: true,
  status: "",
  urlProfilePhoto: null,
};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["urlProfilePhoto", "status", "isFetching", "profile"],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let body = action.newPostText;
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: action.id, message: body, isDelete: false },
        ].reverse(),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.isDelete === false)],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PHOTO_PROFILE:
      return {
        ...state,
        urlProfilePhoto: action.urlProfilePhoto,
      };
    default:
      return state;
  }
};

export const addPostAC = (newPostText, id) => ({
  type: ADD_POST,
  newPostText,
  id,
});
export const deletePost = () => ({ type: DELETE_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setProfileStatus = (status) => ({ type: SET_STATUS, status });
export const updateProfilePhoto = (urlProfilePhoto) => ({
  type: SET_PHOTO_PROFILE,
  urlProfilePhoto,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getProfileStatus = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfileStatus(userId);
  dispatch(setProfileStatus(response.data));
};
export const updateProfileStatus = (status) => async (dispatch) => {
  let response = await usersAPI.updateProfileStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
};

export default profileReducer;