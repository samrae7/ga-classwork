drop table items;

create table items (
  id serial8 primary key,
  item varchar(255), 
  details text,
  done boolean
);

INSERT INTO items (item, details, done) VALUES ('Go to the shops', 'Go to the shop before work', true);
INSERT INTO items (item, details, done) VALUES ('Feed the dogs', 'Feed the dogs twice a day', false);

