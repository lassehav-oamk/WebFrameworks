import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchView from './components/SearchView';
import RegisterView from './components/RegisterView';
import ProductView from './components/ProductView';
import ProfileView from './components/ProfileView'
import data from './data.json'

function App() {
  const [items, setItems] = useState(data.items);
  const [searchFilter, setSearchFilter] = useState("");
  const [listMode, setListMode] = useState("grid");
  const [userInfo, setUserInfo] = useState(null);

  const getProductInfo = (productId) => {
    return items.find(item => item.id === productId);
  }

  const storeUserInfo = (name, address, city, email) => {
    setUserInfo({
      name,
      address,
      city,
      email
    });
  }

  const toggleResultPresentationMode = () => {
    setListMode( listMode == "list" ? "grid" : "list");
  }

  return (
    <Router>
      <Route path="/" exact render={
        (routeProps) =>
          <SearchView
            items={ items }
            searchFilter={ searchFilter }
            onSearchFilterUpdate={ setSearchFilter }
            toggleResultPresentationMode={ toggleResultPresentationMode }
            presentationMode={ listMode }
            userInfo={ userInfo }
            />
      } />
      <Route path="/register" exact render={ routeProps => <RegisterView storeUserInfo={ storeUserInfo } {...routeProps} /> }/>
      <Route path="/profile" exact render={ routeProps => <ProfileView userInfo={ userInfo } {...routeProps} /> }/>
      <Route path="/product/:id" exact render={ routeProps => <ProductView {...routeProps} getProductInfo={ getProductInfo } /> } />
    </Router>
    )
}

export default App;