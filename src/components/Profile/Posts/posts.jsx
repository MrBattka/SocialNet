import React from 'react';
import userPhoto from '../../../assets/img/user.jpg';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.posts.map((post, id) => (
                <ul key={id}>
                    <li>
                        <div className={classes.post}>
                            <div className={classes.avatar}>
                                <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} />
                            </div>
                            <div className={classes.text}>
                                {post.message}
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Posts;