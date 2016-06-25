'use strict';

var server = require('../../server'),

  app = server.getApp(),

  express = server.getExpressApp(),

  router = express.Router(),

  controller = require('../controllers/group');


router
  .route('/')
    .get(controller.find);


app.use('/group', router);
