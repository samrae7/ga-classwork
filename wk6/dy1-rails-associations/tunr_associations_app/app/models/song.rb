class Song < ActiveRecord::Base
  has_many :album_songs
  has_many :albums, through: :album_songs, dependent: :destroy
  belongs_to :artist

  validates :title, presence: true
  validates :title, uniqueness: true
end
