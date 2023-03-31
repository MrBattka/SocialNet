import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import HeaderContainer from '../components/Mobile/Header/HeaderContainer'
import NavContainer from '../components/Mobile/Nav/NavContainer'
import ProfileContainer from '../components/Mobile/Profile/ProfileContainer'
import classes from './Mobile.module.css'

const MobileView = ({ open }) => {
  return (
    <div className={classes.wrapper_app}>
      <header className={classes.header}>
        <HeaderContainer />
      </header>
      <main className={classes.content}>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />} >
            <Route path=':userId' element={<ProfileContainer />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    open: state.mobHeader.isOpenNavMenu
  }
}

const MobileViewCont = connect(mapStateToProps)(MobileView)

export default MobileViewCont