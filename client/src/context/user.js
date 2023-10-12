import React, { useState, useEffect } from "react";

// Create Context
const UserContext = React.createContext();

// Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const login = () => {};

  const logout = () => {};

  const signup = () => {};

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
