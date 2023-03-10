import { createSelector } from "reselect"

export const getUsersArray = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersArray, 
    (users) => {
        return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageUsers = (state) => {
    return state.usersPage.currentPageUsers
}

export const getCurrentPageFriends = (state) => {
    return state.usersPage.currentPageFriends
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}