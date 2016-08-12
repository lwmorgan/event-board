'use strict';

var server = require('../../server'),

  app = server.getApp(),

  express = server.getExpressApp(),

  router = express.Router(),

  controller = require('../controllers/season');


router
  .route('/:year/:name')
    .get(controller.find);


router
  .route('/:year/:name/:event/moment')
    .post(controller.addMoment);


router
  .route('/:year/:name/member')
    .put(controller.updateMember);


app.use('/season', router);
