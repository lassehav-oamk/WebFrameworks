import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchView from './components/SearchView';
import RegisterView from './components/RegisterView';
import ProductView from './components/ProductView';
import ProfileView from './components/ProfileView'
import data from './data.json'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      searchFilter: "",
      listMode: "grid",
      userInfo: null
    }
  }

  searchFilterUpdate = (newValue) => {
    this.setState({ searchFilter: newValue });
  }

  toggleResultPresentationMode = () => {
    this.setState( { listMode: this.state.listMode == "list" ? "grid" : "list" } )
  }

  storeUserInfo = (name, address, city, email) => {
    this.setState({ userInfo: {
      name,
      address,
      city,
      email
    }});
  }

  getProductInfo = (productId) => {
    return this.state.items.find(item => item.id === productId);
  }

  render()
  {
    return (
      <Router>
        <Route path="/" exact render={
          (routeProps) =>
            <SearchView
              items={ this.state.items }
              searchFilter={ this.state.searchFilter }
              onSearchFilterUpdate={ this.searchFilterUpdate }
              toggleResultPresentationMode={ this.toggleResultPresentationMode }
              presentationMode={ this.state.listMode }
              userInfo={ this.state.userInfo }
              />
        } />
        <Route path="/register" exact render={ routeProps => <RegisterView storeUserInfo={ this.storeUserInfo } {...routeProps} /> }/>
        <Route path="/profile" exact render={ routeProps => <ProfileView userInfo={ this.state.userInfo } {...routeProps} /> }/>
        <Route path="/product/:id" exact render={ routeProps => <ProductView {...routeProps} getProductInfo={ this.getProductInfo } /> } />
      </Router>
    )
  }
}

export default App;