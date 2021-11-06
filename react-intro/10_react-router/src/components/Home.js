import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This simple application demonstrates basic use of React Router.
      </p>
      <p>
        Concepts of common elements (the nav bar on top), different child element views, nested routes, navigating to link and
        data access to router parameters are demonstrated
      </p>
      <Link to="Home2">Next</Link>
    </div>
  )
}
