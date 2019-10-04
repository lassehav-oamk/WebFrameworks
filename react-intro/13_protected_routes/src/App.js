import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginView from './components/LoginView';
import ExampleProtectedView from './components/ExampleProtectedView';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  onLogin = (username, password) => {

    console.log(username, password);
  }


  render() {

    /*
<Route path="/register" exact render={ routeProps => <RegisterView storeUserInfo={ this.storeUserInfo } {...routeProps} /> }/>
        <Route path="/profile" exact render={ routeProps => <ProfileView userInfo={ this.state.userInfo } {...routeProps} /> }/>
        <Route path="/product/:id" exact render={ routeProps => <ProductView {...routeProps} getProductInfo={ this.getProductInfo } /> } />
    */
    return (
      <Router>
        <Route path="/" exact render={
          (routeProps) =>
            <LoginView
              onLoginSubmit = { this.onLogin }
              userInfo={ this.state.userInfo }
              />
        } />
        <Route path="/example" exact render={
          (routeProps) =>
            <ExampleProtectedView
              />
        } />

      </Router>
    )
  }
}