import React, { useState, useEffect, createContext } from "react";

// Create Context
const UserContext = createContext();

// Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

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
