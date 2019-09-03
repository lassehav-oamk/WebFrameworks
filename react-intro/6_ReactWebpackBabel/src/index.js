import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

/* Render the App component */
ReactDOM.render(
  <App
    applicationName={ "Shopping List" }
    applicationDescription= { "The best shopping list, now built with webpack" }
  />,      
  document.getElementById('application')
);