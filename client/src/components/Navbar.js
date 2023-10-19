import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(UserContext);

  function logoutUser() {
    fetch("/logout")
    .then(() => {
      logout();
    });
  }

  if (user && !user.errors) {
    return (
      <div className="LoggedInNavbar">
        <button onClick={logoutUser}>Logout</button>
        <h3>Hello {user.first_name}</h3>
      </div>
    );
  } else {
    return (
      <div className="LoggedOutNavbar">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/login">
          <button>Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Sign Up</button>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
