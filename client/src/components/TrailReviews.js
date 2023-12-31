import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BuildReview from "./BuildReview";
import ReviewForm from "./ReviewForm";

function TrailReviews({ trails, onAddReview, onDeleteReview, onUpdateReview }) {
  const { id: trailID } = useParams();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const chosenTrail = trails.find((trail) => trail.id === parseInt(trailID));

  if (chosenTrail) {
    return (
      <div className="trail-reviews-background">
        <Navbar />
        <div className="trail-reviews-content">
          <div className="trail-reviews-border">
            <h1>Reviews For {chosenTrail.trail_name}</h1>
            {showReviewForm ? (
              <ReviewForm
                showReviewForm={showReviewForm}
                setShowReviewForm={setShowReviewForm}
                onAddReview={onAddReview}
                trail={chosenTrail}
              />
            ) : (
              <button
                className="add-review-button"
                onClick={(e) => {
                  setShowReviewForm(!showReviewForm);
                }}
              >
                Add Review
              </button>
            )}
          </div>
        </div>
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
