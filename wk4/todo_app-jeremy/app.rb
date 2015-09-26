require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'

# db setup
before do
  @db = PG.connect(dbname: 'sinatra_todo_app', host: 'localhost')
end

after do
  @db.close
end

# HOME
get '/' do
  redirect to '/todos'
end

# INDEX
get '/todos' do
  sql = 'select * from todos'
  @todos = @db.exec(sql)

  erb :index
end

# NEW
get '/todos/new' do
  erb :new
end

# CREATE
post '/todos' do
  sql = "insert into todos (task, description) values ('#{params[:task]}', '#{params[:description]}') returning *"
  todo = @db.exec(sql).first
  
  redirect to "/todos/#{todo['id']}"
end

# SHOW
get '/todos/:id' do
  sql = "select * from todos where id = #{params[:id]}"
  @todo = @db.exec(sql).first

  erb :show
end

# EDIT
get '/todos/:id/edit' do
  sql = "select * from todos where id = #{params[:id]}"
  @todo = @db.exec(sql).first

  erb :edit
end

# UPDATE
post '/todos/:id' do
  sql = "update todos set task = '#{params[:task]}', description = '#{params[:description]}' where id = #{params[:id]}"
  @db.exec(sql)

  redirect to "/todos/#{params['id']}"
end

# DELETE
post '/todos/:id/delete' do
  sql = "delete from todos where id = #{params[:id]}"
  @db.exec(sql)

  redirect to '/todos'
end
