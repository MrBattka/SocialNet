import React from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import User from '../Users/User/User';

const MyFriends = ({ users, followed, followingInProgress, follow, unfollow,
    onPageChanged, pageSize, totalUsersCount, currentPage }) => {
    return (
        <div>
            {users.map(f => <User user={f} key={f.id} followed={followed} followingInProgress={followingInProgress}
                unfollow={unfollow} follow={follow} />)}
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>
    )
}

export default MyFriends