import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux'; 

import store from './redux/store'; 

import './index.css';
import App from './App';
// import Test from './test'; 

ReactDOM.render(
  <Provider store>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </Provider>, 
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Test />
//   </BrowserRouter>, 
//   document.getElementById('root')
// );


