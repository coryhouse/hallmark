import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/ecards">eCards</Link>
    </li>
  </ul>
);

export default Navigation;
