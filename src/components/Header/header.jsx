import classes from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header__wrapper}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <p>Social ·</p>
                    <p className={classes.logo__text}>· NET</p>
                </div>
                <div className={classes.login__block}>
                    <p className={classes.login}>{ props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;