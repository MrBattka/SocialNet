import React, {useEffect} from 'react';
import Paginator from '../../Common/Paginator/Paginator';
import User from '../Users/User/User';

const MyFriends = ({ users, followed, followingInProgress, follow, unfollow,
    onPageChanged, pageSize, totalUsersCount, currentPage }) => {

    const myFriends = users.map(f => <User user={f} key={f.id} followed={followed} followingInProgress={followingInProgress}
        unfollow={unfollow} follow={follow} />)
        const key = 'name'
        useEffect(() => {
            if (onPageChanged) {
                users.sort((user1, user2) => user1[key] > user2[key] ? 1 : -1)
            }
        })
    return (
        <div>
            {myFriends}
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>
    )
}

export default MyFriends