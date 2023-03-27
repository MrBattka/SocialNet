import React, { useState } from 'react';
import userPhoto from '../../../../assets/img/user.jpg';
import classes from './Posts.module.css';

const Posts = (props) => {
    const [isDelete, setIsDelete] = useState(false)

    const handleClick = (e) => {
        setIsDelete(!isDelete)
        props.deletePost(isDelete)
    }

    return (
        <div className={classes.wrapper}>
            {props.posts.map((post, id, isDelete) => (
                <ul key={id}>
                    <li>
                        <div className={classes.post}>
                            <div className={classes.avatar}>
                                <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} />
                            </div>
                            <div className={classes.text}>
                                {post.message}
                                <span className={classes.deleteBtn} onClick={() => props.deletePost(!isDelete)}>x</span>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Posts;