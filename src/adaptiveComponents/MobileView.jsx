import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import HeaderContainer from '../components/Mobile/Header/HeaderContainer'
import Messages from '../components/Mobile/Messages/Messages'
import MyFriendsContainer from '../components/Mobile/My Friends/MyFriendsContainer'
import NavContainer from '../components/Mobile/Nav/NavContainer'
import ProfileContainer from '../components/Mobile/Profile/ProfileContainer'
import SettingCompContainer from '../components/Mobile/Settins Component/SettingsContainer'
import UsersContainer from '../components/Mobile/Users/UsersContainer'
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
          <Route path='/messages' element={<Messages />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/friends' element={<MyFriendsContainer />} />
          <Route path='/settings' element={<SettingCompContainer />} />
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