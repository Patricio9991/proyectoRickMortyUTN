import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Fragment } from 'react';

import reportWebVitals from './reportWebVitals';
//import Home from "./paginas/home/home"
import Characters from './paginas/Characters/characters';
//import Contact from "./componentes/Contact/contact";
//import Nav from "./componentes/Nav/nav"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Characters />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
