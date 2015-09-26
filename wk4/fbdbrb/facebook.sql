create table people (
  id serial8 primary key,
  first varchar(25) not null,
  last varchar(25) not null,
  dob date check (dob < '1 Jan 2002'),
  relationship varchar(20),
  friends int2 default 0,
  city varchar(20)
);