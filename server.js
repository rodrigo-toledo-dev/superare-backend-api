const express = require('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/superare-api', { useNewUrlParser: true });

requireDir('./src/models');

const User = mongoose.model('User');
const Server = mongoose.model('Server');

app.use('/', require('./src/routes'));

app.listen(3000);