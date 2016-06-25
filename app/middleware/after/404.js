'use strict';

var app = require('../../../server').getApp();

app.use(function (req, res) {

  return res
    .status(404)
    .json({

      'msg': 'API doesn\'t exist.',

      'error': true

    })

});
