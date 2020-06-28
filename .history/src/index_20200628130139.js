import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import Test from './test'; 


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Test />
  </BrowserRouter>, 
  document.getElementById('root')
);

