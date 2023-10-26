class Review < ApplicationRecord
  belongs_to :trail
  belongs_to :user

  validates :trail_id, :user_id, :rating, :comment, presence: true
  validates :rating, numericality: { only_integer: true, less_than_or_equal_to: 10, greater_than_or_equal_to: 1}
  validates :user_id, uniqueness: {scope: :trail_id, message: "can only review each trail once"}
end
