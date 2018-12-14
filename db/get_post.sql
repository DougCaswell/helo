SELECT *
FROM posts
JOIN users ON users.id = posts.author_id
WHERE users.id = $1