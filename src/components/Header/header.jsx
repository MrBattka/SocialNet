import classes from './header.module.css';
import React from 'react';

function Header(props) {
    return (
        <div className={classes.header__wrapper}>
            <header className={classes.header}>
            </header>
            <div className={classes.logo}>
                <p>Social ·</p>
                <p className={classes.logo__text}>· NET</p>
            </div>
        </div>
    )
}

export default Header;