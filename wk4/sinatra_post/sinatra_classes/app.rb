require 'sinatra'
require 'sinatra/reloader' if development? 
require_relative './models/capitalize'

get '/:word' do
  "#{Capitalize.cap params[:word]}"
end