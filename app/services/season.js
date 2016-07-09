var q = require('q'),

  _ = require('lodash'),

  Group = require('../models/group');

module.exports = {

  find: function (year, name) {

    var deferred = q.defer();

    Group.find({seasons: {$elemMatch: {year: year, name: name}}}, {_id: 0, "seasons.$":1}, function(err, groups) {

      var seasons = _.map(groups, 'seasons'),

        season = (seasons && seasons.length) ? seasons[0][0] : null;


      if (err || !season) {

        throw err;

      }

      deferred.resolve(season);

    });

    return deferred.promise;

  }

};
