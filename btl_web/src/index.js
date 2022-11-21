import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './pages/footer';
import Header from './pages/header';
import HomePage from './pages/HomePage';
import Search from  './pages/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Search></Search>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
