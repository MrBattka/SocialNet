import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i > 20) {
            break
        } else {
            pages.push(i)
        }
    }
    return <div>
        <a name='top'></a>
        {props.users.map(u => <div className={classes.wrapper} key={u.id}>
            <div className={classes.wrapper__avatar}>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img className={classes.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div className={classes.btn__wrapper}>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                        className={classes.btn__unfollow} onClick={() => { props.unfollow(u) }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            className={classes.btn__follow} onClick={() => { props.follow(u) }}>Follow</button>}
                </div>
            </div>
            <div className={classes.wrapper__info}>
                <div>
                    <div className={classes.nickName}>
                        <NavLink to={"/profile/" + u.id} className={classes.userName__link}>{u.name}</NavLink>
                    </div>
                    <div className={classes.status}>{u.status}</div>
                </div>
                <div className={classes.location}>
                    <div>{/*u.location.country*/ "USA,"}</div>
                    <div>{/*"u.location.city"*/ "New York"}</div>
                </div>
            </div>
        </div>)}
        <div className={classes.numberPage}>
            {pages.map(p => {
                return <div
                    onClick={(e) => { props.onPageChanged(p) }} key={p.id}>
                    <button className={props.currentPage === p ? classes.selectedPage : ""}><a href="#top">{p}</a></button></div>
            })}
        </div>
    </div>
}

export default Users;