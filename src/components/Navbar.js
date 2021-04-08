import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Salim Kaboura
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Portfolio">
            <li className="nav-item">
              <a className="nav-link">Portfolio</a>
            </li>
          </Link>
          <Link to="/Services">
            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>
          </Link>
          <Link to="/Aboutme">
            <li className="nav-item">
              <a className="nav-link">About Me</a>
            </li>
          </Link>
          <Link to="/Portfolio">
            <li className="nav-item contactbtn">
              <button type="button" class="btn">
                Contact
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
