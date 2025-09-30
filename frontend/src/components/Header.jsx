// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../App.css";

export default function Header({ cartItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-white-black py-3 sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-black" to="/">
          <h3>BuzzMart</h3>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links + search */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Centered search */}
          <div className="mx-auto my-2 my-lg-0 col-12 col-md-6">
            <Search />
          </div>

          {/* Right side links */}
          <div className="navbar-nav ms-auto text-center">
            <Link className="nav-link d-inline-block mx-2 text-black" to="/">
              About Us
            </Link>
            <Link className="nav-link d-inline-block mx-2 text-black" to="/aboutus">
              Products
            </Link>
            <Link className="nav-link d-inline-block mx-2 text-black" to="/login">
              Login
            </Link>
            <Link className="nav-link d-inline-block mx-2 text-black" to="/cart">
              Cart <span className="badge bg-black">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
