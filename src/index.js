import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import './index.css';
import Header from './layout/Header.js';

import Home from './pages/Home';
import Error from './pages/Error.js';
import APropos from './pages/APropos.js';

// react router : cannot use Switch from v5 : replaced by Routes in v6
// https://reacttraining.com/blog/react-router-v6-pre/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/apropos" element={<APropos />} />
       <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
