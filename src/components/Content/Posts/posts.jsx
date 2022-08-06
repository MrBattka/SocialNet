import classes from './posts.module.css';
import React from 'react';


function Posts(props) {
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src='https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
                </div>
                <div className={classes.text}>
                    {props.post}
                </div>
            </div>
        </div>
    )
}

export default Posts;