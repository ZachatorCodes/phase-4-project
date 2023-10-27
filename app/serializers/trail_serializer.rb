class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :length, :elevation, :location, :difficulty, :number_of_reviews

  has_many :reviews
  has_many :users

  def number_of_reviews
    self.object.reviews.count
  end
end
 