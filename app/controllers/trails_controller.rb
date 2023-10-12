class TrailsController < ApplicationController

  skip_before_action :authorize, only: :index

  def index
    trails = Trail.all
    render json: trails, status: :ok
  end

end
