import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand" href="#">
        Salim K
      </p>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item active">
              <p className="nav-link">
                Home <span className="sr-only">(current)</span>
              </p>
            </li>
          </Link>
          <Link to="/Services">
            <li className="nav-item">
              <p className="nav-link">Services</p>
            </li>
          </Link>
          <Link to="/Portfolio">
            <li className="nav-item">
              <p className="nav-link">Portfolio</p>
            </li>
          </Link>
          <Link to="/Skills">
            <li className="nav-item">
              <p className="nav-link">Skills</p>
            </li>
          </Link>

          <Link to="/About">
            <li className="nav-item">
              <p className="nav-link">About</p>
            </li>
          </Link>
          <Link to="/Contact">
            <li className="nav-item">
              <p className="nav-link">Contact</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
