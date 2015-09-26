# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# %w(London Paris Milan Toronto Miami).each do |city|

  h1 = Hotel.create(name: 'GA London Palace', city: 'London')
  h2 = Hotel.create(name: 'GA Paris Palace', city: 'Paris')
  h3 = Hotel.create(name: 'GA toronto Palace', city: 'toronto')
  h4 = Hotel.create(name: 'GA Dublin Palace', city: 'Dublin')
  h5 = Hotel.create(name: 'GA Istanbul Palace', city: 'Istanbul')

  g1 = Guest.create(name: 'Barry Grape', age: 27)
  g2 = Guest.create(name: 'Henry', age: 43)
  g3 = Guest.create(name: 'Sarah', age: 57)
  g4 = Guest.create(name: 'Amy', age: 37)

  h1.reviews.create(content:'room smells of dog', rating: 5, guest: g1)
  h1.reviews.create(content: 'noisy neigbours', rating: 3, guest: g2)
  h2.reviews.create(content:'wfqwfwfff', rating: 6, guest: g3)
  h3.reviews.create(content:'ewfqefewweqfw', rating: 2, guest: g4)

  puts "seeded with #{Hotel.all.count} Hotels"

