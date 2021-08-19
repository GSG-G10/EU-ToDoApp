const express = require('express');
const { join } = require('path');
const compression = require('compression');
require('env2')('config.env');

const routes = require('./routers');

const app = express();
app.set('PORT', process.env.PORT || 8080);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
