import React from 'react';
import { Link } from "react-router-dom";

export default function B(props) {
  return (
    <div>
      <h1>Component B</h1>
      Here it is using data from props via router: { props.myOwnProp }
      <div>
        <Link to="/C">Next</Link>
      </div>      
    </div>
  )
}
