import React, { useContext } from "react";
import { UserContext } from "../context/user";
import ReviewForm from "./ReviewForm";

function BuildReview({ review }) {
  const { user } = useContext(UserContext);
  const userMatch = user.id === review.user_id;
  if (userMatch) {
    return (
      <div className="review">
        <h2>Review by: {user.username}</h2>
        <h2>{review.rating} / 10</h2>
        <p>💬 {review.comment}</p>
        <button>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="review">
        <h2>Review by: {user.username}</h2>
        <h2>{review.rating} / 10</h2>
        <p>💬 {review.comment}</p>
      </div>
    );
  }
}

export default BuildReview;
