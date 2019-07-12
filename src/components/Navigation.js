import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Components.css";
import logo from "./how-to-logo.jpg.png";

export const Navigation = props => {
  const navSwap =
    props.loggedIn === false ? (
      <Link to="/">Log In</Link>
    ) : (
      <> <Link to="/">Home</Link> 
      <div>
        <h2 onClick={props.logout}>Log Out</h2>
        </div>
      </>
    );

  const signSwap = props.loggedIn === false && (
    <NavLink to="/signup" activeClassName="inUse">
      Sign Up
    </NavLink>
  );

  return (
    <div>
      <img id="logo" src={logo} alt="" />
      <h1>How-To</h1>
      <div className="navigation-page">
        <div />
      </div>
      <div className="nav">
        {navSwap}
        {signSwap}
      </div>
    </div>
  );
};
