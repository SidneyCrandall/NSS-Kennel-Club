import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Kennel } from './components/Kennel';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// By adding a root component of <Router /> which gets imported from the React Router package. 
// Within <Router>, place the <Kennel /> child component. This tells React "I will be placing Routes in my Kennel component."
