insert into toy(
    toy_name,
    toy_picture
)values(
    $1,$2
)
returning *