create table user(
    id serial primary key,
    username TEXT,
    user_password TEXT
)

create table boygirl(
    user_id serial primary key,
    firstname TEXT,
    lastname TEXT,
    address TEXT,
    state TEXT,
    city TEXT,
    zip INTEGER,
    country TEXT,
    wish TEXT,
    age INTEGER,
    n_or_n TEXT,
    deeds INTEGER,
    deer TEXT,
    kidpic TEXT,
    toy_id INTEGER REFERENCES toy(toy_id)
-- )

select * from boygirl
select * from toy

drop table boygirl
drop table toy

create table wishlist(
    id serial primary key,
    kid_id INTEGER REFERENCES boygirl(kid_id),
    toy_id INTEGER REFERENCES toy(toy_id),
    toy_made TEXT
)

create tabto boygirl(
    firstname,
    lastname,
    address,
    state,
    city,
    zip,
    country,
    wish,
    age,
    n_or_n,
    deeds,
    deer,
    kidpic,
    toy_id
)values
    ('ant','man', '326 sherman hare rd', 'grantsville', 'maryland', 21536, 'united states', 'radio flyer', 38, 'nice', 48, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_com_crd_01.jpg',1),
    ('tony','stark', '162 derrickson st', 'fort benning', 'georgia', 31905, 'united states', 'world peace', 40, 'naughty', 20, 'comet', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_02.jpg',2),
    ('rocket','racoon', '8050 secluded valley dr', 'redding', 'california', 96001, 'united states', 'bad ass gun', 15,'naughty', 1, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/023rra_ons_crd_02.jpg',3),
    ('grand','master', '1307 n 1410 e', 'provo', 'utah', 84606, 'united states', 'hulk', 55,'nice', 78, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/114gdm_ons_crd_01-1.jpg',4)
    ('loki','thorsbro', 'center st', 'san francisco', 'california', 94016, 'united states', '', 33, 'naughty', 99, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_02.jpg', 5),
    ('thanos','thanoston', '1550 n venetian way', 'saratoga springs', 'utah', 84045, 'united states', '', 80, 'naughty', 10000, 'comet', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_02.jpg', 6),
    ('dr','strang', 'center street', 'new york', 'new york', 10001, 'united states', '', 13,'naughty', 1, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_02.jpg', 7),
    ('the','collector', '1307 n 1410 e', 'provo', 'utah', 84606, 'united states', 'hulk', 55,'nice', 78, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/111ctt_ons_crd_02.jpg',8)


insert into toy(
toy_name,
toy_picture)values('radio flyer', 'https://images-na.ssl-images-amazon.com/images/I/81jEz6AfRjL._SL1500_.jpg'),
                  ('world peace','https://i1.wp.com/whoishussain.org/wp-content/uploads/2017/09/world-peace.jpg?fit=1024%2C543&ssl=1'),
                  ('big ass gun','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3l2-uteXar9dq023bSGmc7519S8lsG1Eg7aryeMdim2B6Z99'),
                  ('hulk','https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_02.jpg')

insert into wishlist(
    kid_id,
    toy_id,
    toy_made
)values(1,1,'yes'),
       (2,2,'no'),
       (3,3,'yes'),
       (4,4,'yes')

