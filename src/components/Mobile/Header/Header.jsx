import React from 'react'
import classes from './Header.module.css'
import AuthComponent from '../../AuthComponent/AuthComponent'

const Header = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.burger_menu}>M</div>
        <div className={classes.logo}>L</div>
        <AuthComponent />
    </div>
  )
}

export default Header