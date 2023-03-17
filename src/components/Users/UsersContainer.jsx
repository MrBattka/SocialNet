import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthLocation } from "../../hoc/withAuthLocation";
import {
    follow, requestGetUsers, setCurrentPageUsers,
    toggleFollowingProgress, unfollow
} from "../../Redux/users-reduser";
import {
    getCurrentPageUsers, getFollowingInProgress,
    getIsFetching, getPageSize, getTotalUsersCount, getUsers
} from "../../Redux/users-selector";
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
        <a name='top'></a>
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
        currentPage: getCurrentPageUsers(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default
    compose(
        connect(mapStateToProps,
            {
                setCurrentPageUsers,
                toggleFollowingProgress,
                requestGetUsers,
                follow,
                unfollow
            }), withAuthLocation)(UsersContainer)