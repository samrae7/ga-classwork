require 'sinatra'
require 'sinatra/contrib/all'
require 'json'
require 'pg'
require 'pry-byebug'

# There is a big somewhere in this code ( could be in the js). Gui has sent out a working copy

get '/' do
  redirect to('/items')
end

get '/items' do
  # get all items in the DB
  sql = 'select * from items'
  @items = run_sql(sql)

  if request.xhr?
    json @items.entries
    # makes it into an array
  else
    erb :index
  end
end

post '/items' do
  sql = "insert into items (item, done) values ('#{params[:item]}, 'false')returning *"
  items = run_sql(sql)
  if request.xhr?
    json items.entries.first
    # entries turns it into an array # 
  end
end


put '/items/:id' do

  sql = "update items set done = '#{params[:done]}' where id = #{params}{:id]"

  run_sql(sql)

  if request.xhr?
    [200, {"Content-Type" => "application/json"}, {status: :ok}.to_json]
  end

end




private
def run_sql(sql)
  conn = PG.connect(:dbname =>'todo', :host => 'localhost')
  begin
    result = conn.exec(sql)
  ensure
    conn.close
  end

  result
end
