const express = require('express');
const bodyParser = require('body-parser');

const category = require('./routes/categories');

const users = require('./routes/user');

const books = require('./routes/book');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/category', category);
app.use('category/:id', category);

app.use('/users', users);
app.use('/users/:id', users);

app.use('/book', books);
app.use('/book/:id', books);


app.listen(3000);
