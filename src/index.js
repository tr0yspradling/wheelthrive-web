import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById('root'));
