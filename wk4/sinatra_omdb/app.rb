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

get '/movies' do

  sql = "select * from movies"
  @list = @db.exec(sql)

  # @movies_in_database = @list.map{ |movie| "#{movie['title']}" }
  erb :movies

end

get '/movies/:title' do
  sql = "select * from movies where title LIKE '%#{params[:title]}%'"

  @movie = @db.exec(sql)

  erb :movie

end


get '/' do
  # handling two different get requests
  if params[:title]
    movie_name = params[:title].downcase.gsub(' ','+')
    movie_object = HTTParty.get "http://www.omdbapi.com/?t=#{movie_name}"
    # fix apostrophes
    @movie_hash = movie_object.each {|key, value| value.gsub!("'","''") }
    # instance variable in the controller allows view to use it

    
    title = @movie_hash['Title']
    poster = @movie_hash['Poster']
    year = @movie_hash['Year']
    released = @movie_hash['Released']
    runtime = @movie_hash['Runtime']
    genre = @movie_hash['Genre']
    director = @movie_hash['Director']
    writers = @movie_hash['Writer']
    plot = @movie_hash['Plot']

    sql = "insert into movies (title,
poster, year, released, runtime, genre, director, writers, plot) values ('#{title}', '#{poster}', '#{year}', '#{released}', '#{runtime}', '#{genre}', '#{director}', '#{writers}', '#{plot}') returning *"

  database = @db.exec(sql)
  end

  
  erb :index
end