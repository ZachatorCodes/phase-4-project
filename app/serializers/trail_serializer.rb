class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :length, :elevation, :location, :difficulty

  has_many :reviews
  has_many :users
end
 