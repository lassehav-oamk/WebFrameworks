import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>
}

export default function C({ match }) {
  console.log(match)
  return (    
      <div>
        <h1>Component C</h1>
        <Link to="/">Back to start</Link>
        <nav>
          <ul>
            <li>
              <Link to={`${match.path}/home`}>Home</Link>
            </li>
            <li>
              <Link to={`${match.path}/about`}>About</Link>
            </li>
            <li>
              <Link to={`${match.path}/users`}>Users</Link>
            </li>
          </ul>
        </nav>
        
        <Route path={`${match.path}/home`} component={Home} />
        <Route path={`${match.path}/about/`} component={About} />
        <Route path={`${match.path}/users/`} component={Users} />
        
      </div>    
  )
}
