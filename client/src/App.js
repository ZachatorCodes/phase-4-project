// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from "./context/user";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TrailForm from "./components/TrailForm";

function App() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch("/trails")
      .then((r) => r.json())
      .then((trails) => {
        setTrails(trails);
        console.log(trails);
      });
  }, []);

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addtrail" element={<TrailForm />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
