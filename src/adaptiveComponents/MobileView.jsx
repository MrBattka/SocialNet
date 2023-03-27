import React from 'react'
import Header from '../components/Mobile/Header/Header'
import ProfileContainer from '../components/Mobile/Profile/ProfileContainer'
import classes from './Mobile.module.css'

const MobileView = () => {
  return (
    <div className={classes.wrapper_app}>
      <header className={classes.header}>
        <Header />
      </header>
      <nav className={classes.nav}>
      </nav>
      <main className={classes.content}>
        <ProfileContainer />
      </main>
    </div>
  )
}

export default MobileView