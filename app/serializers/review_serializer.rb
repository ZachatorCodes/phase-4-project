class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :trail_id, :user_id, :rating, :comment, :username

  belongs_to :user
  belongs_to :trail

  def username
    self.object.user.username
  end
end
