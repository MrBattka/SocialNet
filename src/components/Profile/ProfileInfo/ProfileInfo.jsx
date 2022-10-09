import classes from './ProfileInfo.module.css';
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/img/user.jpg'
import Lorem from '../../Common/Lorem/Lorem';
import ProfileStatus from './ProfileStatus/ProfileStatus';

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile__wrapper}>
            <div>
                <img className={classes.profile__img}
                    src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            </div>
            <div className={classes.profile__info}>
                <div className={classes.userName}>{props.profile.fullName}</div>
                <div className={classes.about__user}>{
                    <ProfileStatus /> != null ? <ProfileStatus
                                                    profile={props.profile}
                                                    status={props.status}
                                                    updateProfileStatus={props.updateProfileStatus} /> : <Lorem />}
                </div>          
            </div>
        </div>
    )
}

export default ProfileInfo;