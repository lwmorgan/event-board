
var Q = require('q'),

  Season = require('../services/season');

module.exports = {

  find: function (req, res) {

    var year = req.params.year || '',

      name = req.params.name || '';

    Season.find(year, name).then(function (groups) {

      if(groups) {

        return res.json(groups);

      } else {

        return res
          .status(404)
          .json({

            'msg': 'An error occured when attempting to find the groups.'

          });

      }

    });

  }

};
