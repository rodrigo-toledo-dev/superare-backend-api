const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');
routes.get('/users', UsersController.index);
routes.get('/users/list', UsersController.list);
routes.get('/users/:_id', UsersController.find);
routes.post('/users', UsersController.save);
routes.put('/users/:_id', UsersController.save);
routes.delete('/users/:_id', UsersController.destroy);

const ServersController = require('./controllers/ServersController');
routes.get('/servers', ServersController.index);
routes.get('/servers/inactives', ServersController.inactives);
routes.get('/servers/:_id', ServersController.find);
routes.post('/servers', ServersController.save);
routes.put('/servers/:_id', ServersController.save);
routes.delete('/servers/:_id', ServersController.destroy);

module.exports = routes;