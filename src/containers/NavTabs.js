import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs navbar navbar-dark bg-primary">
      <li className="navbar navbar-expand-lg bg-primary navbar-brand col d-flex justify-content-center">
        EMPLOYEE DIRECTORY
      </li>
      <li className="nav-item bg-light">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item bg-light">
        <Link
          to="/discover"
          className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </Link>
      </li>
      <li className="nav-item bg-light">
        <Link
          to="/search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Table
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
