import React from "react";
import { connect } from "react-redux";
import classes from './Users.module.css'
import { setCurrentPage, toggleFollowingProgress,  getUsers, follow, unfollow } from "../../Redux/users-reduser";
import Users from './Users'
import Preloader from "../Common/Preloader/Preloader";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.currentPage, this.props.pageNumber)
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
    { setCurrentPage, toggleFollowingProgress, getUsers, follow, unfollow })(UsersContainer)