import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import MessagesContainer from './components/Masseges/MessagesContainer';
import MySubscriptionsContainer from './components/MyFriends/MyFriendsContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './Redux/app-reduser';
import store from './Redux/redux-store';

const App = ({ isAuth, authUserId, initializeApp, initialize }) => {

  useEffect(() => {
    initializeApp()
  }, [])

  if (initialize === false) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      {isAuth && <Nav authUserId={authUserId} />}
      <Routes>
        <Route path='/login' element={<LoginPageContainer />} />
      </Routes>
      <div className='app-wrapper-content'>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/profile' />} /> */}
          <Route path='/profile' element={<ProfileContainer />} >
            <Route path=':userId' element={<ProfileContainer />} />
          </Route>
          <Route path='/messages/*' element={<MessagesContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/friends' element={<MySubscriptionsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const AppSocialNet = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default AppSocialNet