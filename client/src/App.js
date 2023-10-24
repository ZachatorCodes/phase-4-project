// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from "./context/user";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TrailForm from "./components/TrailForm";
import Profile from "./components/Profile";

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

  function handleAddTrail(newTrail) {
    setTrails([...trails, newTrail]);
  }

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addtrail" element={<TrailForm onAddTrail={handleAddTrail}/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Home trails={trails}/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
