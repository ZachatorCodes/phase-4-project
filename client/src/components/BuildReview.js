import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import ReviewForm from "./ReviewForm";
import UpdateReview from "./UpdateReview";

function BuildReview({ review, onDeleteReview, onUpdateReview }) {
  const { user } = useContext(UserContext);
  const userMatch = user.id === review.user_id;
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    });
  }

  if (userMatch) {
    return (
      <div className="review">
        <h2>Review by: {user.username}</h2>
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
        <h2>Review by: {user.username}</h2>
        <h2>{review.rating} / 10</h2>
        <p>💬 {review.comment}</p>
      </div>
    );
  }
}

export default BuildReview;
