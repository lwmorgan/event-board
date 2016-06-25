'use strict';

var server = require('../../../server'),

  app = server.getApp(),

  expressWinston = require('express-winston'),

  winston = require('winston');

app.use(expressWinston.errorLogger({

  'transports': [

    new winston.transports.File({

      'name': 'request-error',

      'filename': 'logs/errors.log',

      'handleExceptions': true,

      'json': true,

      'colorize': true

    })

  ],

  'expressFormat': true,

  'colorStatus': true

}));

// Any old custom middleware we feel like adding....
// app.use(function(req, res, next) {
//   console.log('In request after middlware.');
//   next();
// });

server.msg('Winston - Error Logging enabled.');
