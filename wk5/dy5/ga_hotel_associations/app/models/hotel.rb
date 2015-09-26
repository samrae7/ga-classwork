class Hotel < ActiveRecord::Base
  has_many :reviews, dependent: :destroy
  has_many :guests, through: :reviews
end
