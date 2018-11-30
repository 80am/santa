UPDATE boygirl
SET doesbknow = 'no'
WHERE id = $1;
-- SELECT *
-- FROM boygirl 
-- RIGHT JOIN toy
-- ON boygirl.toy_id = toy.toy_id
