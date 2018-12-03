UPDATE boygirl
SET doesbknow = 'yes'
WHERE id = $1;
SELECT *
FROM boygirl 
JOIN toy
ON boygirl.toy_id = toy.toy_id
where boygirl.year = 2018
order by boygirl.firstname
