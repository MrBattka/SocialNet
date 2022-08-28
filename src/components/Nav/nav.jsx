import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';
import React from 'react';

function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.link}>
                <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to="/content">Profile</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to="/messages">Messages</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to="/users">Users</NavLink>
            </div>
            <div className={classes.link}>
                <a className={classes.item} href="#">Music</a>
            </div>
            <div className={classes.line}></div>
            <div className={classes.link}>
                <a className={classes.settings} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Nav;