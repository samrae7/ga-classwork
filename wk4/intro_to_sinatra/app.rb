require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do
  @name = 'City Gent'
  @data = {
    hobbies: ['cycling','eating', 'sleeping']
  }
  @profile_pic = '/city_gent.jpeg'
  erb :home
end

get '/hi/:firstname/:lastname/:location/:age' do
  "I am Sinatra and I am saying hi to #{params[:firstname]} #{params[:lastname]} #{params[:age]} #{params[:location]}"
end

# # VERB 'PATH' do
#   EXECUTE CODE
#   end