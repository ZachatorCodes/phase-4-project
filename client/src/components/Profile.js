import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../context/user";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (user) {
    return (
      <div className="profile-background">
        <Navbar />
        <div className="profile-content">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>
            Username - {user.username} | Email - {user.email}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile-background">
        <Navbar />
        <div className="profile-content">
          <h1>Please Log In To View Your Profile</h1>
        </div>
      </div>
    )
  }
}

export default Profile;
