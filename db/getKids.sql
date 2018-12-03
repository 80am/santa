SELECT *
FROM boygirl 
RIGHT JOIN toy
ON boygirl.toy_id = toy.toy_id
where year = 2018
