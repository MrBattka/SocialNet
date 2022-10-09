import React from "react";
import { connect } from "react-redux";
import classes from './Users.module.css'
import { setCurrentPage, toggleFollowingProgress, requestGetUsers, follow, unfollow } from "../../Redux/users-reduser";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader";
import { useEffect } from "react";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selector";

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestGetUsers(props.currentPage, props.pageSize)
    }, [])
    const onPageChanged = (pageNumber) => {
        props.requestGetUsers(pageNumber, props.pageSize)
    }

    return (<>
        <span className={classes.users}>Users:</span>
        {props.isFetching ? <Preloader /> : <Users
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            users={props.users}
            unfollow={props.unfollow}
            follow={props.follow}
            onPageChanged={onPageChanged}
            currentPage={props.currentPage}
            followingInProgress={props.followingInProgress} />}
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default
    connect(mapStateToProps,
        { setCurrentPage, toggleFollowingProgress, requestGetUsers, follow, unfollow })(UsersContainer)