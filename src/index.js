import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landing from './components/landing';
import Details from './components/formdetails';
import Menu from './old/landing';
import 'font-awesome/css/font-awesome.min.css'
import Form from './components/form';
import NewForm from './components/newform';

ReactDOM.render(
  <React.StrictMode>
    <NewForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
