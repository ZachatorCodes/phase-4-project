import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Home() {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <h3>
          Welcome Home, {user.first_name} {user.last_name}
        </h3>
      </div>
    );
  } else {
    return <h1>Please Sign Up or Log In</h1>;
  }
}

export default Home;
