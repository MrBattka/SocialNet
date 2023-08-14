import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE_USERS = "SET_CURRENT_PAGE_USERS";
const SET_CURRENT_PAGE_FRIENDS = "SET_CURRENT_PAGE_FRIENDS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPageUsers: 1,
  currentPageFriends: 1,
  isFetching: true,
  followingInProgress: [null],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE_USERS: {
      return { ...state, currentPageUsers: action.currentPageUsers };
    }
    case SET_CURRENT_PAGE_FRIENDS: {
      return { ...state, currentPageFriends: action.currentPageFriends };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageUsers = (currentPageUsers) => ({
  type: SET_CURRENT_PAGE_USERS,
  currentPageUsers,
});
export const setCurrentPageFriends = (currentPageFriends) => ({
  type: SET_CURRENT_PAGE_FRIENDS,
  currentPageFriends,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestGetUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPageUsers(page));
  let response = await usersAPI.requestGetUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};

export const requestGetFriendUsers =
  (page, pageSize, friend) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPageFriends(page));
    let response = await usersAPI.requestGetFriendUsers(page, pageSize, friend);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  };

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  ACFollowUnfollow
) => {
  dispatch(toggleFollowingProgress(true, userId.id));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(ACFollowUnfollow(userId.id));
  }
  dispatch(toggleFollowingProgress(false, userId.id));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSuccess
  );
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSuccess
  );
};

export default usersReduser;
