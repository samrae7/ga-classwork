require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

  get '/' do 
    @title = 'home'
    erb :home
  end

  post '/navigate' do
    case params[:destination].downcase
    when 'sports' then redirect to '/sports'
    when 'weather' then redirect to '/weather'
    when 'gossip' then redirect to '/gossip'
    when 'celebrity' then redirect to '/celebrity'
    else
      @error = 'Invalid page selected'
      erb :home
    end
  end

  get '/sports' do
    @title = 'sportsn['
    erb :sports
  end

  get '/weather' do
    @title = 'weather'
    erb :weather
  end

  get '/gossip' do
    @title = 'gossip'
    erb :gossip
  end

  get '/celebrity' do
    @title = 'celebrity'
    erb :celebrity
  end

