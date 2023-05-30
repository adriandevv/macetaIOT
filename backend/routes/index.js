const express = require('express');
const usersRouter = require('./users.router');
const plantaRouter = require('./planta.router');
const authRouter = require('./auth.router')
const macetaRouter = require('./maceta.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/planta', plantaRouter);
  router.use('/maceta', macetaRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;
