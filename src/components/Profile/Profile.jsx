import classes from './Profile.module.css';
import ProfileInfo from './Profile/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPost/myPostContainer';

const Profile = (props) => {
    
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.head__img} src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613162821_148-p-zheltii-fon-minimalizm-224.jpg" />
            </div>
            <div className={classes.profile__wrapper}>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer profile={props.profile} />       
            </div>
        </div>
    )
}

export default Profile;