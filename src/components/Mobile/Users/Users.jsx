import React from "react";
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User/User";
import classes from './Users.module.css'

const Users = (props) => {
    return <div className={classes.wrapper_users}>
        {props.users.map(u => <User user={u} key={u.id} followed={props.followed} followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow} follow={props.follow} />)}
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} 
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
    </div>
}

export default Users;