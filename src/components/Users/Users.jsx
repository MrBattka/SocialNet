import React from "react";
import ReactPaginator from "../Common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return <div>
        <a name='top'></a>
        {props.users.map(u => <User user={u} key={u.id} followed={props.followed} followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow} follow={props.follow} />)}
        <ReactPaginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} 
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
    </div>
}

export default Users;