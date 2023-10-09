class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :bio

  has_many :reviews
  has_many :trails
end
