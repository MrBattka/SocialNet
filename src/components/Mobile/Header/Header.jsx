import React from 'react'
import classes from './Header.module.css'
import AuthComponent from '../../AuthComponent/AuthComponent'

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.burger_menu}>M</div>
            <div className={classes.wrapper_auth}><AuthComponent /></div>
            <div className={classes.logo}>
                <p>Social ·</p>
                <p className={classes.logo__text}>· NET</p>
            </div>
        </div>
    )
}

export default Header