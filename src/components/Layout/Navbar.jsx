import React from 'react'
import logo from '../../images/logo.svg';
const Navbar = () =>  {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary shadow-sm py-3">
    <div className="container">
      <a className="navbar-brand me-auto fw-semibold" href="#">
        <img src={logo} width="40" alt="" className="me-2" />
        Mindful Work
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto fw-medium text-secondary">
          <li className="nav-item mx-1">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">Articles</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <div className="login">
          <a href="login.html" className="custom-button rounded-5 fw-medium text-decoration-none">
            Login
          </a>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;