SELECT *
FROM boygirl 
JOIN toy
ON boygirl.toy_id = toy.toy_id
where year = 2018
order by boygirl.firstname
