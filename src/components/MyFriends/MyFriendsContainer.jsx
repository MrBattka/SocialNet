import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { follow, requestGetFriendUsers, setCurrentPage, toggleFollowingProgress, unfollow } from '../../Redux/users-reduser'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersArray } from '../../Redux/users-selector'
import Preloader from '../Common/Preloader/Preloader'
import MyFriends from './MyFriends'

const MyFriendsContainer = ({ users, currentPage, pageSize, requestGetFriendUsers, follow, unfollow, isFetching,
    totalUsersCount, followingInProgress }) => {

    useEffect(() => {
        requestGetFriendUsers(currentPage, pageSize)
    }, [])
    const onPageChanged = (pageNumber) => {
        requestGetFriendUsers(pageNumber, pageSize)
    }

    return (
        <>
            {isFetching ? <Preloader /> :
                <MyFriends
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    users={users}
                    unfollow={unfollow}
                    follow={follow}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                    followingInProgress={followingInProgress} />
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    users: getUsersArray(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)

})

export default
    connect(mapStateToProps, { setCurrentPage, requestGetFriendUsers, toggleFollowingProgress, follow, unfollow })(MyFriendsContainer)