class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :length, :elevation, :location, :string, :difficulty

  has_many :reviews
  has_many :users
end
