const express = require('express');
const { join } = require('path');
const compression = require('compression');

const routes = require('./routes');

const app = express();
app.set('PORT', process.env.PORT || 7070);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
