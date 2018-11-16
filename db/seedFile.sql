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
    zip NUMBER,
    city TEXT,
    country TEXT,
    wish TEXT,
    age NUMBER,
    deeds NUMBER,
    deer TEXT,
    kidpic TEXT
)

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

create table boygirl(
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
    kidpic
)values
    ('ant','man', '326 sherman hare rd', 'grantsville', 'maryland', 21536, 'united states', 'radio flyer', 38, 'nice', 48, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_com_crd_01.jpg'),
    ('tony','stark', '162 derrickson st', 'fort benning', 'georgia', 31905, 'united states', 'world peace', 40, 'naughty', 20, 'comet', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_02.jpg'),
    ('rocket','racoon', '8050 secluded valley dr', 'redding', 'california', 96001, 'united states', 'bad ass gun', 15,'naughty', 1, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/023rra_ons_crd_02.jpg'),
    ('grand','master', '1307 n 1410 e', 'provo', 'utah', 84606, 'united states', 'hulk', 55,'nice', 78, 'rudolph', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/114gdm_ons_crd_01-1.jpg')