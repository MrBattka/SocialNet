import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import MessagesContainer from './components/Masseges/MessagesContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './Redux/app-reduser';
import store from './Redux/redux-store';

const App = (props) => {

  useEffect(() => {
    props.initializeApp()
  }, [])

  if (props.initialize === false) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav authUserId={props.authUserId} />
      <div className='app-wrapper-content'>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/profile' />} /> */}
          <Route path='/profile' element={<ProfileContainer />} >
            <Route path=':userId' element={<ProfileContainer />} />
          </Route>
          <Route path='/messages/*' element={<MessagesContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginPageContainer />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized,
  authUserId: state.auth.userId
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