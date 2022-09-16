import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Done from './pages/Done';
import { useState } from 'react';
import { DoneContext } from './interfaces/doneContext';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/done" element={<Done />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
