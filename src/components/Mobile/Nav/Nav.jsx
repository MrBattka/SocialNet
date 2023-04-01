import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthComponent from '../../AuthComponent/AuthComponent'
import classes from './Nav.module.css'

const Nav = ({ open, openNavMenu }) => {
    return (
        <div className={classes.wrapper_nav}>
            <div className={classes.wrapper_auth}><AuthComponent /></div>
            <nav className={classes.nav}>
                <div className={classes.link}>
                    <NavLink onClick={() => { openNavMenu(false) }}
                        className={navData => navData.isActive ? classes.active : classes.item} to="/profile">Profile</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink onClick={() => { openNavMenu(false) }}
                        className={navData => navData.isActive ? classes.active : classes.item} to="/messages">Messages</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink onClick={() => { openNavMenu(false) }}
                        className={navData => navData.isActive ? classes.active : classes.item} to="/users">Users</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink onClick={() => { openNavMenu(false) }}
                        className={navData => navData.isActive ? classes.active : classes.item} to="/friends">My Friends</NavLink>
                </div>
                <div className={classes.line}></div>
                <div className={classes.link}>
                    <NavLink onClick={() => { openNavMenu(false) }}
                        className={navData => navData.isActive ? classes.active : classes.item} to="/settings">My Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav