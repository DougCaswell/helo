CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    hash_value text,
    profile_pic TEXT
);
CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    image_url TEXT,
    post_content TEXT,
    author_id INTEGER REFERENCES users (id)
);