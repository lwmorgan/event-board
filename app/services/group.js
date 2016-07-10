
var q = require('q'),

  Group = require('../models/group');

module.exports = {

  findByName: function (name) {

    var deferred = q.defer();

    Group.find({ name: name }, {"seasons.events":0,"seasons.members":0,"adminPword":0}, function(err, group) {

      if (err) {

        throw err;

      }

      deferred.resolve(group[0]);

    });

    return deferred.promise;

  }

};
