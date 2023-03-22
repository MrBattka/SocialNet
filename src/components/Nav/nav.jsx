import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCurrentPageFriends, setCurrentPageUsers } from '../../Redux/users-reduser';
import classes from './Nav.module.css';

const Nav = ({ setCurrentPageUsers, setCurrentPageFriends }) => {
    const hundleClick = (e) => {
        e.preventDefault()
        setCurrentPageFriends(1)
        setCurrentPageUsers(1)
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.link}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/profile">Profile</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/messages">Messages</NavLink>
            </div>
            <div className={classes.link} onClick={hundleClick}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/users">Users</NavLink>
            </div>
            <div className={classes.link} onClick={hundleClick}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/friends">My Friends</NavLink>
            </div>
            <div className={classes.line}></div>
            <div className={classes.link}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/setting">My Setting</NavLink>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    // someState
})

export default connect(mapStateToProps, { setCurrentPageFriends, setCurrentPageUsers })(Nav);