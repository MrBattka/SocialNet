import classes from './posts.module.css';
import React from 'react';


function Posts(props) {
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.small} />
                </div>
                <div className={classes.text}>
                    {props.post}
                </div>
            </div>
        </div>
    )
}

export default Posts;