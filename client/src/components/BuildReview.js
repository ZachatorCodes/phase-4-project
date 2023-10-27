import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import UpdateReview from "./UpdateReview";

function BuildReview({ review, onDeleteReview, onUpdateReview }) {
  const { user, setUser } = useContext(UserContext);
  const userMatch = user.id === review.user_id;
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
        const updatedUserTrails = user.trails.filter(
          (trail) => trail.id !== review.trail_id
        );
        setUser({ ...user, trails: updatedUserTrails });
      }
    });
  }

  if (userMatch) {
    return (
      <div className="review">
        <h2>Review by: {review.username}</h2>
        <h2>{review.rating} / 10</h2>
        <p>💬 {review.comment}</p>
        <button onClick={handleDelete}>Delete</button>
        {showUpdateForm ? (
          <>
            <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
              Hide Form
            </button>
            <UpdateReview
              review={review}
              onUpdateReview={onUpdateReview}
              showUpdateForm={showUpdateForm}
              setShowUpdateForm={setShowUpdateForm}
            />
          </>
        ) : (
          <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
            Edit
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="review">
        <h2>Review by: {review.username}</h2>
        <h2>{review.rating} / 10</h2>
        <p>💬 {review.comment}</p>
      </div>
    );
  }
}

export default BuildReview;
