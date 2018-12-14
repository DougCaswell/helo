require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller')
const port = process.env.SERVER_PORT;
const { CONNECTION_STRING, SECRET } = process.env;
const session = require('express-session');

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log('listening on port ', port);
    });
});

app.use(express.json());

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}));

app.post('/auth/register', controller.register);
app.post('/auth/login', controller.login);
app.get('/api/posts/:id', controller.getPosts)