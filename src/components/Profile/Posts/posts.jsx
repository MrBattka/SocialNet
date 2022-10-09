import classes from './Posts.module.css';
import React from 'react';
import userPhoto from '../../../assets/img/user.jpg'

function Posts(props) {
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