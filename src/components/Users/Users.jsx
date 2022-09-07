import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

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
                    {u.followed ? <button className={classes.btn__unfollow} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button className={classes.btn__follow} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </div>
            <div className={classes.wrapper__info}>
                <div>
                    <div className={classes.nickName}>{u.name}</div>
                    <div className={classes.status}>{u.status}</div>
                </div>
                <div className={classes.location}>
                    <div>{/*"u.location.country"*/ "USA"},</div>
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


// [
//     {
//         id: 1, photoUrl: 'https://i.pinimg.com/originals/b5/62/89/b56289240a5d6ec442c057ecbdc3bf52.jpg',
//         followed: false, fullName: <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to="/content">Pablo Escobar</NavLink>, status: 'Everything in this life has a solution, except death.', location: { city: 'New York', country: 'USA' }
//     },
//     {
//         id: 2, photoUrl: 'https://i.ebayimg.com/images/g/dykAAOSwa~BYN02P/s-l400.jpg',
//         followed: false, fullName: 'Donald Trump', status: 'Bad times often provide great opportunities.', location: { city: 'Miami', country: 'USA' }
//     },
//     {
//         id: 3, photoUrl: 'https://sun9-17.userapi.com/impg/tjPEva9aANHGWLFkZ6yvnO4ZWCtxKbLsl7D2Yw/pFEaZ_I_Xfg.jpg?size=604x604&quality=96&sign=ec4eab1b92688ce19f731b6a8e4e503f&c_uniq_tag=IGfS4iBTHP_-O5zm1Iib7X958kD27_Si1lxIMHXn5m4&type=album',
//         followed: true, fullName: 'John Rockefeller', status: 'Don\'t be afraid to give up the good in favor of the excellent.', location: { city: 'Detroit', country: 'USA' }
//     }
// ]