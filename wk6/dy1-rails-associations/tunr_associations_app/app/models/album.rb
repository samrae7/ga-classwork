class Album < ActiveRecord::Base
  has_many :album_songs
  has_many :songs, through: :album_songs, dependent: :destroy
end
