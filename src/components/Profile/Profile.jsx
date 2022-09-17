import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPost/MyPostContainer';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.profile__wrapper}>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer profile={props.profile} />       
            </div>
        </div>
    )
}

export default Profile;