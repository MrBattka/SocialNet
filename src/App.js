import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Masseges/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import LoginPageContainer from './components/LoginPage/LoginPageContainer';

function App(props) {
  return (
    <>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile/:userId/' element={ <ProfileContainer />} />
            <Route path='/messages/*' element={ <MessagesContainer /> } />
            <Route path='/users' element={ <UsersContainer /> } />
            <Route path='/login' element={ <LoginPageContainer /> } />
          </Routes>
        </div>
      </div>
      </>
  );
}


export default App;
