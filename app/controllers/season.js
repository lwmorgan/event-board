
var season = require('../services/season');


module.exports = {

  find: function (req, res) {

    var year = req.params.year || '',

      name = req.params.name || '';

    season.find(year, name)
      .then(function (groups) {

        return res
          .status(groups ? 200 : 404)
          .json(groups);

    });

  },

  addMoment: function (req, res) {

    var year = req.params.year || '',

      seasonName = req.params.name || '',

      eventName = req.params.event || '',

      moment = req.body;

    season.addMoment(year, seasonName, eventName, moment)
      .then(function (file) {

        return res
          .status(file ? 200 : 404)
          .json(file);

    });

  },

  updateMember: function (req, res) {

    var year = req.params.year || '',

      seasonName = req.params.name || '',

      member = req.body;

    season.updateMember(year, seasonName, member)
      .then(function (file) {

        return res
          .status(file ? 200 : 404)
          .json(file);

      });

  }

};
