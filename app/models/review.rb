class Review < ApplicationRecord
  belongs_to :trail
  belongs_to :user

  validates :trail_id, :user_id, :rating, :comment, presence: true
end
