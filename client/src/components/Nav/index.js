import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default Nav;
