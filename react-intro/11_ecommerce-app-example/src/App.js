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
      listMode: "grid"
    }
  }

  searchFilterUpdate = (newValue) => {
    this.setState({ searchFilter: newValue });
  }

  toggleResultPresentationMode = () => {
    this.setState( { listMode: this.state.listMode == "list" ? "grid" : "list" } )
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
              />
        } />
        <Route path="/register" exact component={ RegisterView } />
        <Route path="/profile" exact component={ ProfileView } />
        <Route path="/product/:id" exact component={ ProductView } />
      </Router>
    )
  }
}

export default App;
