'use strict';

var Q = require('q');

module.exports = function () {

  var deferred = Q.defer();

  require('../../utils/require')(__dirname)
    .then(function (result) {

      deferred.resolve(result);

    });

  return deferred.promise;

};
