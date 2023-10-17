import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Home() {
  const { user } = useContext(UserContext);

  if (!user || user.errors) {
    return <h3>Please Signup or Login</h3>;
  } else {
    return (
      <div>
        <h3>
          Welcome Home, {user.first_name} {user.last_name}
        </h3>
      </div>
    );
  }
}

export default Home;
