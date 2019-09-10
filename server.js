const express = require('express');
const mongoose = require ('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/superare-api', { useNewUrlParser: true });

app.use('/', require('./src/routes'));

app.listen(3000);