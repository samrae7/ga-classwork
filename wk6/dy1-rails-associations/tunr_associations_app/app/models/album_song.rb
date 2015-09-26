class AlbumSong < ActiveRecord::Base
  belongs_to :song
  belongs_to :album
end
