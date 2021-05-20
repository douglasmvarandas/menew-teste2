import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <>
      <nav className="navbar-default">
        <ul className="navbar-container">
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              CADASTRO
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
