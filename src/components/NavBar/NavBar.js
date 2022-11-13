import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <div className="navbar-wrapper">
        <h1 className="title">Meta-Music</h1>
        <nav className="navbar">
        {/* <NavLink to="/">Home</NavLink> */}
        </nav>
      </div>
    </header>
  );
};
