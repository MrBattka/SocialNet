import classes from './ProfileInfo.module.css';
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile__wrapper}>
            <div>
                <img className={classes.profile__img}
                    src={props.profile.photos.large} />
            </div>
            <div className={classes.profile__info}>
                <p className={classes.username}>Pablo Escobar</p>
                <p className={classes.about__user}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi nulla
                    debitis facilis repellat. Ullam in earum voluptatem eligendi blanditiis!</p>
            </div>
        </div>
    )
}

export default ProfileInfo;