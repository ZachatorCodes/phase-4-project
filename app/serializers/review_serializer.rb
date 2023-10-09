class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :trail_id, :user_id, :rating, :comment

  belongs_to :user
  belongs_to :trail
end
