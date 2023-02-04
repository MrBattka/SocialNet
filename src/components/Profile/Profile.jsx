import React from 'react';
import AdditionalInformation from './AdditionalInformation/AdditionalInformation';
import MyPostsContainer from './MyPost/MyPostContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={classes.content}>
            <div className={classes.profile__wrapper}>
                <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
                <AdditionalInformation profile={props.profile} lookingForAJob={props.lookingForAJob} lookingForAJobDescription={props.lookingForAJobDescription}
                    fullName={props.fullName} contacts={props.contacts} />
                <MyPostsContainer profile={props.profile} />
            </div>
        </div>
    )
}

export default Profile;