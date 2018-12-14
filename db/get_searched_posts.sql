SELECT *
FROM posts
JOIN users ON users.id = posts.author_id
WHERE posts.title ILIKE '%'+$1+'%' & users.id != $2