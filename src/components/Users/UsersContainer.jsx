import React from "react";
import { connect } from "react-redux";
import classes from './Users.module.css'
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../Redux/users-reduser";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    render() {
        return <>
            <span className={classes.users}>Users:</span>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress} />}

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersContainer)