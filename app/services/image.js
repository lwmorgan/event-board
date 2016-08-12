var q = require('q'),

  fs = require('fs'),

  mongoose = require('mongoose'),

  Grid = require('gridfs-stream'),

  GridFS = Grid(mongoose.connection.db, mongoose.mongo);

module.exports = {

  find: function (id, response) {

    var result = false;

    try {

      var readStream = GridFS.createReadStream({_id: id});

      readStream.pipe(response);

      result = true;

    } catch(err) {

      result = false;

    }

    return result;

  }

};
