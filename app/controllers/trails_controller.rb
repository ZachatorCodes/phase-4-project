class TrailsController < ApplicationController

  skip_before_action :authorize, only: [:index, :trail_reviews]

  def index
    trails = Trail.all
    render json: trails, status: :ok
  end

  def create
    trail = Trail.create!(trail_params)
    render json: trail, status: :created
  end

  # Live Coding Assessment
  def trail_reviews
    trails = Trail.all
    filteredTrails  = trails.filter {|trail| trail.reviews.count >= params[:n].to_i}
    render json: filteredTrails
  end

  private

  def trail_params
    params.permit(:trail_name, :length, :elevation, :location, :difficulty)
  end

end
