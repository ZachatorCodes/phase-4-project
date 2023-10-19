import React, { useContext } from "react";
import { UserContext } from "../context/user";

function Trails() {
  const {trails} = useContext(UserContext)

  return (
    <div className="Trails">
      {trails.map(trail => {
        return <h1>{trail.trail_name}</h1>
      })}
    </div>
  )
}

export default Trails;