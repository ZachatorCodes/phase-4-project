// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { UserProvider } from "./context/user";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TrailForm from "./components/TrailForm";
import Profile from "./components/Profile";
import TrailReviews from "./components/TrailReviews";

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

  function handleAddReview(newReview) {
    const updatedTrails = trails.map((trail) => {
      if (trail.id === newReview.trail_id) {
        return {
          ...trail,
          reviews: [...trail.reviews, newReview],
        };
      } else {
        return trail;
      }
    });
    setTrails(updatedTrails);
  }

  function handleDeleteReview(deletedReview) {
    const trailReviews = trails.find(
      (trail) => trail.id === deletedReview.trail_id
    ).reviews;
    const updatedReviews = trailReviews.filter(
      (review) => review.id !== deletedReview.id
    );
    const updatedTrails = trails.map((trail) => {
      if (trail.id === deletedReview.trail_id) {
        return {
          ...trail,
          reviews: updatedReviews,
        };
      } else {
        return trail;
      }
    });
    setTrails(updatedTrails);
  }

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/addtrail"
            element={<TrailForm onAddTrail={handleAddTrail} />}
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/trail/:id/reviews"
            element={
              <TrailReviews
                trails={trails}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
              />
            }
          />
          <Route exact path="/" element={<Home trails={trails} />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
