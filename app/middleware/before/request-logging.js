'use strict';

var server = require('../../../server'),

  app = server.getApp(),

  expressWinston = require('express-winston'),

  winston = require('winston');

app.use(expressWinston.logger({

  'transports': [

    new winston.transports.File({

      'name': 'request-success',

      'filename': 'logs/requests.log',

      'level': 'info',

      'json': true,

      'colorize': true

    })

  ],

  'expressFormat': true,

  'colorStatus': true

}));

// Any old custom middleware we feel like adding....
// app.use(function(req, res, next) {
//   console.log('In request before middlware.');
//   next();
// });

server.msg('Winston - Request Logging enabled.');
