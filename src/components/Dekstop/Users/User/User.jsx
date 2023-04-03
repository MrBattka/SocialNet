import React from "react"
import { NavLink } from "react-router-dom";
import classes from "../Users.module.css";
import userPhoto from '../../../../assets/img/user.jpg'

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapper__avatar}>
                <div>
                    <NavLink to={"/profile/" + props.user.id}>
                        <img className={classes.avatar} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div className={classes.btn__wrapper}>
                    {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                        className={classes.btn__unfollow} onClick={() => { props.unfollow(props.user) }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                            className={classes.btn__follow} onClick={() => { props.follow(props.user) }}>Follow</button>}
                </div>
            </div>
            <div className={classes.wrapper__info}>
                <div>
                    <div className={classes.nickName}>
                        <NavLink to={"/profile/" + props.user.id} className={classes.userName__link}>{props.user.name}</NavLink>
                    </div>
                    <div className={classes.status}>{props.user.status}</div>
                </div>
                <div className={classes.location}>
                    <div>{/*u.location.country*/ "USA,"}</div>
                    <div>{/*"u.location.city"*/ "New York"}</div>
                </div>
            </div>
        </div>
    )
}

export default User