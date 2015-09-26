drop database sinatra_todo_app;

create database sinatra_todo_app;

\c sinatra_todo_app

drop table todos;

create table todos (
  id serial8 primary key,
  task varchar(50),
  description varchar(200)
);

insert into todos (task, description) values ('buy milk', '2 pints whole and 2 pints semi');