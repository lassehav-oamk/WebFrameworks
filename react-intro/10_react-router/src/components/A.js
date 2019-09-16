import React from 'react';
import { Link } from "react-router-dom";

export default function A() {
  return (
    <div>
      <h1>Component A</h1>
      <Link to="/B">Next</Link>
    </div>
  )
}
