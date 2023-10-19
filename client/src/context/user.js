import React, { useState, useEffect, createContext } from "react";

// Create Context
const UserContext = createContext();

// Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setLoggedIn(false);
        } else {
          setUser(data);
          setLoggedIn(true);
        }
      });
  }, []);

  function fetchTrails() {
    fetch("/trails")
      .then((r) => r.json())
      .then((trails) => {
        setTrails(trails);
        console.log(trails);
      });
  }

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
    fetchTrails();
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
    fetchTrails();
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, signup, loggedIn, trails, setTrails }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
