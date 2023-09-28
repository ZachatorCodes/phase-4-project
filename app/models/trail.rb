class Trail < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  validates :trail_name, :length, :elevation, :location, :difficulty, presence: true
  validates :trail_name, uniqueness: true
end
