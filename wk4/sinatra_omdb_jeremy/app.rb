require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'
require 'httparty'

before do
  @db = PG.connect(dbname: 'movies_app', host: 'localhost')
end

after do
  @db.close
end

get '/' do
  if params[:title]
    movie_name = params[:title].downcase.gsub(' ', '+')
    movie_hash = HTTParty.get "http://www.omdbapi.com/?t=#{movie_name}"
    @movie_hash = movie_hash.each {|key, value| value.gsub!("'","''") }

    sql = "insert into movies(title, year, released, runtime, genre, director, writers, actors, plot, poster) values ('#{@movie_hash['Title']}', '#{@movie_hash['Year']}', '#{@movie_hash['Released']}', '#{@movie_hash['Runtime']}', '#{@movie_hash['Genre']}', '#{@movie_hash['Director']}', '#{@movie_hash['Writer']}', '#{@movie_hash['Actors']}', '#{@movie_hash['Plot']}', '#{@movie_hash['Poster']}')"
    @db.exec(sql)

  end

  erb :index
end

get '/movies' do
  sql = 'select * from movies'
  @movies = @db.exec(sql)

  erb :movies
end

get '/movies/:title' do
  sql = "select * from movies where title LIKE '%#{params[:title]}%'"
  @movie = @db.exec(sql)

  binding.pry

  erb :movie
end





