import React from 'react';
import { Link } from "react-router-dom";

export default function B() {
  return (
    <div>
      <h1>Component B</h1>
      <Link to="/C">Next</Link>
    </div>
  )
}
