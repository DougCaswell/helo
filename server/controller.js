const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const user = await db.find_user([username]);
        if (user[0]) {
            return res.status(200).send({ loggedIn: false, message: 'Username already in use' });
        } else {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);
            let createdCustomer = await db.create_user([username, hash]);
            req.session.user = { loggedIn: true, username: createdCustomer[0].username, id: createdCustomer[0].id, message: 'Success' };
            res.status(200).send(req.session.user);
        };
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const user = await db.find_user([username]);
        if (!user[0]) {
            return res.status(200).send({ loggedIn: false, message: 'Username not found' });
        };
        const result = bcrypt.compareSync(password, user[0].hash_value);
        if (result) {
            req.session.user = { loggedIn: true, username: user[0].username, id: user[0].id, message: 'Success' }
            return res.status(200).send(req.session.user)
        } else {
            return res.status(200).send({ loggedIn: false, message: 'Incorrect password' })
        }
    },

    getPosts: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { search, userposts } = req.query
        
        if (id == 0) {
        if (userposts && search) {
            const posts = await db.get_user_searched_posts([search])
            return res.status(200).send(posts)
        }
        if (search && !userposts) {
            const posts = await db.get_searched_posts([search, userposts])
            return res.status(200).send(posts)
        }
        if (userposts && !search) {
            const posts = await db.get_notuser_posts([userposts])
            return res.status(200).send(posts)
        } else {
            const posts = await db.get_all_posts()
            return res.status(200).send(posts)
        }} else {
            const posts = await db.get_post([id])
            return res.status(200).send(posts[0])
        }

    }

};