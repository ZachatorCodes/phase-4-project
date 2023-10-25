import React, { useState } from "react";

function UpdateReview({
  review,
  onUpdateReview,
  showUpdateForm,
  setShowUpdateForm,
}) {
  const [errorList, setErrorList] = useState([]);
  const [rating, setRating] = useState(review.rating);
  const [comment, setComment] = useState(review.comment);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
      }),
    })
      .then((r) => r.json())
      .then((review) => {
        if (!review.errors) {
          onUpdateReview(review);
          setErrorList([]);
          setShowUpdateForm(!showUpdateForm);
        } else {
          const reviewErrors = review.errors.map((e) => (
            <li key={e.id}>{e}</li>
          ));
          setErrorList(reviewErrors);
        }
      });
  }

  return (
    <div className="update-review">
      <h3>Edit Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          name="rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          value={rating}
        ></input>
        <input
          type="text"
          name="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        ></input>
        <button type="submit">Update Review</button>
      </form>
      <ul>{errorList}</ul>
    </div>
  );
}

export default UpdateReview;
