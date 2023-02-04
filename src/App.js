import './App.css';
import React, { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Masseges/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';
import { initializeApp } from './Redux/app-reduser';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';

const App = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    props.initializeApp()
}, [])
  if (props.initialize === false) {
    return <Preloader />
  }
  return (
    <>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            
            <Route path='/' element={<Navigate to="/profile" />} />
            <Route path='/profile' element={<ProfileContainer />} >
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/messages/*' element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPageContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
