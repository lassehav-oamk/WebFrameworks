import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import A from './components/A';
import B from './components/B';
import C from './components/C';

export default class App extends React.Component  {
  constructor(props)
  {
    super(props);

    this.state = {
      exampleData: "Hello World"
    };
  }

  render()
  {
    return (
      <Router>
        <Route path="/" exact component={A} />
        <Route path="/B" exact render={(routeProps ) => <B {...routeProps } myOwnProp={ this.state.exampleData} />}  />
        <Route path="/C" component={C} />     
        
      </Router>
    )
  }
}
