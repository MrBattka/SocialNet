import React from 'react';
import NavContainer from '../Nav/NavContainer';
import classes from './Header.module.css';

const Header = ({ openNavMenu, open }) => {
    return (
        <>
            <div className={classes.wrapper}>
                
                <div className={open ? classes.open : classes.burger_menu}>
                    <span onClick={() => openNavMenu(!open)}>Menu</span>
                </div>
                <div className={open ? classes.menu_open : classes.menu_closed}>
                    <NavContainer />
                </div>
                <div className={classes.logo}>
                    <p>Social ·</p>
                    <p className={classes.logo__text}>· NET</p>
                </div>
            </div>
        </>
    )
}

export default Header