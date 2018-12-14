INSERT INTO users
(
    username, hash_value, profile_pic
)
VALUES
(
    $1, $2, 'https://target.scene7.com/is/image/Target/GUEST_0ecdacd8-0f0c-480d-ad53-1f605994eadb?wid=488&hei=488&fmt=pjpeg'
)
RETURNING *;