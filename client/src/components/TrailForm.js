import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function TrailForm({ onAddTrail }) {
  const navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [trailInfo, setTrailInfo] = useState({
    trail_name: "",
    length: "",
    elevation: "",
    location: "",
    difficulty: 1,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(trailInfo);
    console.log("Fetching...");
    fetch("/trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trailInfo),
    })
      .then((r) => r.json())
      .then((trail) => {
        if (!trail.errors) {
          onAddTrail(trail);
          navigate("/");
        } else {
          const trailErrors = trail.errors.map((e) => <li key={e.id}>{e}</li>);
          setErrorList(trailErrors);
        }
      });
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setTrailInfo({
      ...trailInfo,
      [name]: value,
    });
  }

  return (
    <div className="trail-form-background">
      <Navbar />
      <div className="trail-form-content">
        <div className="trail-form-border">
          <h1>Add A Trail</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Trail Name"
              name="trail_name"
              onChange={handleChange}
              value={trailInfo.trail_name}
            ></input>
            <input
              type="number"
              min="0"
              placeholder="Length"
              name="length"
              onChange={handleChange}
              value={trailInfo.length}
            ></input>
            <input
              type="number"
              min="0"
              placeholder="Elevation Gain"
              name="elevation"
              onChange={handleChange}
              value={trailInfo.elevation}
            ></input>
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={handleChange}
              value={trailInfo.location}
            ></input>
            <select
              name="difficulty"
              onChange={handleChange}
              value={trailInfo.difficulty}
            >
              <option value={1}>Easy</option>
              <option value={2}>Moderate</option>
              <option value={3}>Hard</option>
            </select>
            <button type="submit">Add Trail</button>
          </form>
          <ul>{errorList}</ul>
        </div>
      </div>
    </div>
  );
}

export default TrailForm;
