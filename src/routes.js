const { Router } = require('express');
const cardController = require('./controllers/cardController')
const creditController = require('./controllers/creditController')
const routes = Router();


routes.post('/cards',cardController.create);
routes.get('/cards',cardController.get);

routes.post('/transactions',creditController.create);
routes.get('/transactions',creditController.get);


module.exports = routes;