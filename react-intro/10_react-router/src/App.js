import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import A from './components/A';
import B from './components/B';
import C from './components/C';


export default function App(props) {
  const { match } = props;
  return (
    <Router>
      <Route path="/" exact component={A} />
      <Route path="/B" exact component={B} />
      <Route path="/C" component={C} />      
    </Router>
  )
}
