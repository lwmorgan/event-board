'use strict';

var server = require('../../server'),

  app = server.getApp(),

  express = server.getExpressApp(),

  router = express.Router(),

  controller = require('../controllers/group');


router
  .route('/')
    .get(controller.find);

router
  .route('/test')
    .get(controller.test);

router
  .route('/:name')
    .get(controller.findByName);




app.use('/group', router);
