import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import MessagesContainer from './components/Masseges/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer'
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={ <ProfileContainer />} />
            <Route path='/messages/*' element={ <MessagesContainer /> } />
            <Route path='/users' element={ <UsersContainer /> } />
          </Routes>
        </div>
      </div>
  );
}


export default App;
