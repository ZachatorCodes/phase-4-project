class ReviewsController < ApplicationController
  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:comment, :rating, :user_id, :trail_id)
  end
end