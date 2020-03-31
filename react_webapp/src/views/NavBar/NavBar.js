import React, { Component } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Medical Record
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/discoverPatient">
                  Search Patient
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/discover">
                  Search Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
