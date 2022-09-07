import classes from './posts.module.css';
import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/img/user.jpg'

function Posts(props) {

    // if (!props.profile.photos.small) {
    //     return <Preloader />
    // }

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} />
                </div>
                <div className={classes.text}>
                    {props.post}
                </div>
            </div>
        </div>
    )
}

export default Posts;