'use strict';

var server = require('../../server'),

  app = server.getApp(),

  express = server.getExpressApp(),

  router = express.Router(),

  controller = require('../controllers/image');


router
  .route('/:id')
    .get(controller.find);


app.use('/image', router);
