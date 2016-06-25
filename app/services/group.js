
var q = require('q'),

  Group = require('../models/group');

module.exports = {

  find: function () {

    var deferred = q.defer();

    Group.find({}, function(err, groups) {

      if (err) {

        throw err;

      }

      deferred.resolve(groups);

    });

    return deferred.promise;

  },

  findByName: function (name) {

    var deferred = q.defer();

    Group.findOne({ name: name }, function(err, group) {

      if (err) {

        throw err;

      }

      deferred.resolve(group);

    });

    return deferred.promise;

  }

};
