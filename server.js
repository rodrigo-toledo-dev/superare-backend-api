const express = require('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');

const app = express();
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/superare-api', { useNewUrlParser: true });

requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3000);