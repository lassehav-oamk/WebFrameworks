import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginView from './components/LoginView';
import ExampleProtectedView from './components/ExampleProtectedView';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Auth';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount()
  {    
    this.setState({ isAuthenticated: Auth.isAuthenticated() })
  }

  onLogin = (username, password) => {

    console.log(username, password);
    Auth.authenticate();
    this.setState({ isAuthenticated: Auth.isAuthenticated() })
  }


  render() {

    return (
      <Router>
        <Route path="/" exact render={
          (routeProps) =>
            <LoginView
              onLoginSubmit = { this.onLogin }
              userInfo={ this.state.userInfo }
              {...routeProps}
              />
        } />
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/example" exact render={
            (routeProps) =>
              <ExampleProtectedView
                />
          }>          
        </ProtectedRoute>
        

      </Router>
    )
  }
}