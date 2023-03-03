import classes from './Header.module.css';
import React from 'react';
import AuthComponent from '../AuthComponent/AuthComponent';

const Header = () => {
    return (
        <header className={classes.header__wrapper}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <p>Social ·</p>
                    <p className={classes.logo__text}>· NET</p>
                </div>
                <AuthComponent />
            </div>
        </header>
    )
}

export default Header;