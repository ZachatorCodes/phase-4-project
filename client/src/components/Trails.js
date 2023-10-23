import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Trails() {
  const { trails } = useContext(UserContext);

  return (
    <div className="trails">
      {trails.map((trail) => {
        let trail_difficulty;
        if (trail.difficulty === 3) {
          trail_difficulty = "Hard";
        } else if (trail.difficulty === 2) {
          trail_difficulty = "Moderate";
        } else {
          trail_difficulty = "Easy";
        }
        return (
          <div className="trail" key={trail.id}>
            <h1 key={trail.id}>{trail.trail_name}</h1>
            <p>Location: {trail.location}</p>
            <p>Length: {trail.length} miles</p>
            <p>Elevation Gain: {trail.elevation}</p>
            <p>Difficulty: {trail_difficulty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Trails;
