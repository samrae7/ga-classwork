require 'sinatra'
require 'pry'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'


before do

@db = PG.connect(dbname: 'to_do', host: 'localhost')

end

after do
  @db.close
end

# INDEX

get '/' do


  if params[:task]
    sql = "insert into tasks(item) values ('#{params[:task]}')"
    @db.exec(sql)
  end

@header_index ='index'
sql = "select * from tasks"
@task_list = @db.exec(sql)


erb :index
end


get '/create' do



@header = 'create task'


erb :create


end


get '/:task' do

@header = params[:task]


erb :task

end

# NEW

# get /whatver  do

# @header = 'whatver'
#   erb :whatver you think


# CREATE 

# SHOW

# EDIT

# UPDATE


#  DELETE

#  create to+do.sql file

# drop table
#  create table todom  (

#  id serial8 primary key)