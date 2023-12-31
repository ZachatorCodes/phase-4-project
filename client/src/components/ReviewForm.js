import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function ReviewForm({ showReviewForm, setShowReviewForm, onAddReview, trail }) {
  const { user, setUser } = useContext(UserContext);
  const [errorList, setErrorList] = useState([]);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      rating: rating,
      comment: comment,
      trail_id: trail.id,
      user_id: user.id,
    });
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
        trail_id: trail.id,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((review) => {
        console.log(review);
        if (!review.errors) {
          onAddReview(review);
          setErrorList([]);
          setRating(1);
          setComment("");
          setShowReviewForm(!showReviewForm);
          setUser({
            ...user,
            trails: [
              ...user.trails,
              { ...trail, number_of_reviews: trail.number_of_reviews + 1 },
            ],
          });
        } else {
          const reviewErrors = review.errors.map((e, index) => {
            return <li key={index}>{e}</li>;
          });
          setErrorList(reviewErrors);
        }
      });
  }

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          name="rating"
          placeholder="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          value={rating}
        ></input>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        ></input>
        <button type="submit">Add Review</button>
      </form>
      <ul>{errorList}</ul>
      <button
        className="close-review-button"
        onClick={() => {
          setShowReviewForm(!showReviewForm);
        }}
      >
        Close Form
      </button>
    </div>
  );
}

export default ReviewForm;
