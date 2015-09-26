# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Song.delete_all
Album.delete_all
Artist.delete_all
AlbumSong.delete_all

s1 = Song.create!(title: 'Happy Birthday')
s2 = Song.create!(title: 'We wish you a merry xmas')
s3 = Song.create!(title: 'Silent Night')


a1 = Album.create!(name: 'Now 2001')
a2 = Album.create!(name: 'Dark Side of the Moon')
a3 = Album.create!(name: 'The White Album')


a1.album_songs.create!(song_id: s2.id, track_number: 1)
a2.album_songs.create!(song_id: s3.id, track_number: 1)
a3.album_songs.create!(song_id: s1.id, track_number: 1)

a1 = Artist.create!(name:'Robbie Williams')
a2 = Artist.create!(name:'Christin Aguilera')
a3 = Artist.create!(name:'Michael Jackson')

a1.songs << s1
a2.songs << s2
a3.songs << s3


