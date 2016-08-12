
var Q = require('q'),

  Img = require('../services/image');

module.exports = {

  find: function (req, res) {

    var id = req.params.id || -1;

    if(Img.find(id, res)) {

      return res;

    } 
    else {

      return res
        .status(404)
        .json({

          'msg': 'An error occured when attempting to find the specified image.'

        });

    }

  }

};
