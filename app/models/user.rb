class User < ApplicationRecord
  has_secure_password

  has_many :reviews, dependent: :destroy
  has_many :trails, through: :reviews

  validates :first_name, :last_name, :email, :username, :password, :bio, presence: true
  validates :username, :email, uniqueness: true
end
