import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styels.css';
import setAuthToken from './utils/setauthToken';
if(localStorage.token){
  setAuthToken(localStorage.token);
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

