class TrailsController < ApplicationController

  def index
    trails = Trail.all
    render json: trails, status: :ok
  end

  def show

  end

  def create
    trail = Trail.create!(trail_params)
    render json: trail, status: :created
  end

  private

  def trail_params
    params.permit(:trail_name, :length, :elevation, :location, :difficulty)
  end

end
