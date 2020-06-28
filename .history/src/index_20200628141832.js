import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
// import Test from './test'; 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Test />
//   </BrowserRouter>, 
//   document.getElementById('root')
// );


