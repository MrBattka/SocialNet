import classes from './ProfileInfo.module.css';
import React, { useEffect, useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/img/user.jpg'
import Lorem from '../../Common/Lorem/Lorem';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ModalWindow from '../../Common/ModalWindow/ModalWindow';

function ProfileInfo(props) {
    const [active, setActive] = useState(false)
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        if (photo) {
            props.updateProfilePhoto(photo)
        }
    })

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile__wrapper}>
            <div>
                <img className={classes.profile__img}
                    src={props.profile.photos.large ?? props.urlProfilePhoto ?? userPhoto} onClick={() => setActive(!active)} />
            </div>
            <ModalWindow active={active} setEctive={setActive} setPhoto={setPhoto}
                profilePhotoLarge={props.profile.photos.large} children={props.profile.photos.large} />
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