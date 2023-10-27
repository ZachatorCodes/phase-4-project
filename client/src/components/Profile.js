import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../context/user";
import Trails from "./Trails";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (user) {
    if (user.trails.length) {
      return (
        <div className="profile-background">
          <Navbar />
          <div className="profile-content">
            <div className="profile-border">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p className="user-info">
              Username - {user.username} | Email - {user.email}
            </p>
            <p className="user-info">Bio: {user.bio}</p>
          </div>
          </div>
          <Trails trails={user.trails} />
        </div>
      );
    } else {
      return (
        <div className="profile-background">
          <Navbar />
          <div className="profile-content">
            <div className="profile-border">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p className="user-info">
              Username - {user.username} | Email - {user.email}
            </p>
            <p className="user-info">Bio: {user.bio}</p>
            <h1>No reviewed trails. Get out there and review some trails!</h1>
          </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="profile-background">
        <Navbar />
        <div className="profile-content">
          <h1>Please Log In To View Your Profile</h1>
        </div>
      </div>
    );
  }
}

export default Profile;
