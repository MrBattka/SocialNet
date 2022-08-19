import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Content from './components/Content/content';
import MessagesContainer from './components/Masseges/MessagesContainer';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/content' element={ <Content state={props.state}  />} />
            <Route path='/messages/*' element={ <MessagesContainer /> } />
          </Routes>
        </div>
      </div>
  );
}


export default App;
