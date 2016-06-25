
var Q = require('q'),

  Group = require('../services/group');

module.exports = {

  find: function (req, res) {

    Group.find().then(function (groups) {

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

  },

  findByName: function (req, res) {

    var name = req.params.name || '';

    Group.findByName(name).then(function (group) {

      if(group) {

        return res.json(group);

      } else {

        return res
          .status(404)
          .json({

            'msg': 'An error occured when attempting to find the specified group.'

          });

      }

    });

  }

};
