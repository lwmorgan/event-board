'use strict';

var Q = require('q'),

  async = require('async');

module.exports = function (directory) {

  var deferred = Q.defer();

  require('globby')([

    directory + '/*',

    '!' + directory + '/index.js'

  ])
    .then(function (paths) {

      async.eachLimit(paths, 1,
        function (path, next) {

        if(path.indexOf('.') !== -1) {

          require(path);

        }

        return next();

      },
      function () {

        deferred.resolve(true);

      });

    });

  return deferred.promise;

};
