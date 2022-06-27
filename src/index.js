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
import { AddAnimal } from './pages/AddAnimal';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/AddAnimal" element={<AddAnimal/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();