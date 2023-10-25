import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../context/user";
import BuildReview from "./BuildReview";
import ReviewForm from "./ReviewForm";

function TrailReviews({ trails, onAddReview, onDeleteReview, onUpdateReview }) {
  const { id: trailID } = useParams();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { user } = useContext(UserContext);
  const chosenTrail = trails.find((trail) => trail.id === parseInt(trailID));

  if (chosenTrail) {
    return (
      <div className="trail-reviews-background">
        <Navbar />
        <div className="trail-reviews-content">
          <h1>Reviews For {chosenTrail.trail_name}</h1>
          {showReviewForm ? (
            <ReviewForm
              showReviewForm={showReviewForm}
              setShowReviewForm={setShowReviewForm}
              onAddReview={onAddReview}
              trailID={chosenTrail.id}
            />
          ) : (
            <button
              onClick={(e) => {
                setShowReviewForm(!showReviewForm);
              }}
            >
              Add Review
            </button>
          )}
          <div className="reviews">
            {chosenTrail.reviews.map((review) => (
              <BuildReview
                review={review}
                key={review.id}
                onDeleteReview={onDeleteReview}
                onUpdateReview={onUpdateReview}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="trail-reviews">
        <h1>Error: Trail Not Found</h1>
      </div>
    );
  }
}

export default TrailReviews;
