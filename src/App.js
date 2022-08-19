

import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Content from './components/Content/content';
import Messages from './components/Masseges/Messages';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/content' element={ <Content state={props.state}  />} />
            <Route path='/messages/*' element={ <Messages dialogsData={props.state.dialogsPage} 
                                                          dispatch={props.dispatch}
                                                          newMessageText={props.state.dialogsPage.newMessageText}
                                                          state={props.state} /> } />
          </Routes>
        </div>
      </div>
  );
}


export default App;
