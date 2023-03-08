import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, requestGetUsers, setCurrentPage, toggleFollowingProgress, unfollow } from "../../Redux/users-reduser";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../Redux/users-selector";
import Preloader from "../Common/Preloader/Preloader";
import Users from './Users';
import classes from './Users.module.css';

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