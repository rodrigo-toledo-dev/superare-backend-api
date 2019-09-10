const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.save);
routes.put('/users', UsersController.save);
routes.delete('/users', UsersController.destroy);

const ServersController = require('./controllers/ServersController');
routes.get('/servers', ServersController.index);
routes.post('/servers', ServersController.save);
routes.put('/servers', ServersController.save);
routes.delete('/servers', ServersController.destroy);

module.exports = routes;