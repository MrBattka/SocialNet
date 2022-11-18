import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav(props) {
    // {`/profile/${userId}`}
    return (
        <nav className={classes.nav}>
            <div className={classes.link}>
                <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to="/profile">Profile</NavLink>
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

const mapStateToProps = (state) => ({
    userId: state.usersPage.profile
})

export default connect(mapStateToProps)(Nav);