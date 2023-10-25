import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Trails from "./Trails";

function Home({trails}) {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div className="logged-in-home-background">
        <Navbar />
        <div >
          <h3 className="intro-msg">Welcome Home, {user.first_name} ☀️</h3>
        </div>
        <Trails trails={trails}/>
      </div>
    );
  } else {
    return (
      <div className="home-background">
        <Navbar />
        <div className="logged-out-home">
          <div className="home-title">
            <h1>⛺ Welcome to BunkTrails 🥾</h1>
          </div>
          <div className="home-buttons">
            <NavLink to="/login">
              <button className="home-button">Log In</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="home-button">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
