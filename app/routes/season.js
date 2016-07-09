'use strict';

var server = require('../../server'),

  app = server.getApp(),

  express = server.getExpressApp(),

  router = express.Router(),

  controller = require('../controllers/season');

router
  .route('/:year/:name')
    .get(controller.find);


app.use('/season', router);
