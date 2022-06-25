import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import{Navbar} from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import {Home} from './pages/Home';
import {Search} from './pages/Search';
import { LoginUser } from './pages/LoginUser';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div>
        <div>
        <Navbar></Navbar>
        </div>
        <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Login" element={<LoginUser/>}/>
        </Routes>
        </div>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();