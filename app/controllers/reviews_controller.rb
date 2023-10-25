class ReviewsController < ApplicationController

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = Review.find(params[:id])
    review.update!(update_review_params)
    render json: review, status: :ok
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:comment, :rating, :user_id, :trail_id)
  end

  def update_review_params
    params.permit(:comment, :rating)
  end
end
