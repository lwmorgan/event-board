var mongoose = require('mongoose'),

  Q = require('q'),

  config = require('config'),

  Service = {

    connect: function () {

      var deferred = Q.defer(),

        db = mongoose.connection,

        cfg = config.get('application').database;

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', function() {

        deferred.resolve();

      });

      mongoose.connect('mongodb://' + cfg.host + ':' + cfg.port + '/' + cfg.name);

      return deferred.promise;

    }

  };

module.exports = Service;
