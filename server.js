var express = require('express'),

  Db = require('./app/models/db'),

  config = require('config'),

  app = express(),

  Q = require('q'),

  chalk = require('chalk'),

  Server = {

    msg: function(msg) {

      console.log(chalk.bgWhite(chalk.red('## ') + chalk.black('event-board') + chalk.red(' ## ') + chalk.black(msg)));

      return this;

    },

    getPort: function () {

      var cfg = config.get('application');

      return cfg.port;

    },

    getApp: function () {

      return app;

    },

    getExpressApp: function () {

      return express;

    },

    database: function () {

      var deferred = Q.defer(),

        self = this;

      Db.connect().then(function () {

        self.msg('MongoDb - Database connection established.');

        return deferred.resolve();

      });

      return deferred.promise;

    },

    beforeMiddleware: function () {

      var before = require('./app/middleware/before'),

        deferred = Q.defer(),

        self = this;

      before()
        .then(function (result) {

          self.msg('Express - Before Middlewares applied.');

          if(result) {

            deferred.resolve(result);

          } else {

            self.msg('Express - Failed to apply middlewares before routes!');

            return process.exit(0);

          }

        });

      return deferred.promise;

    },

    routes: function () {

      var routing = require('./app/routes'),

        deferred = Q.defer(),

        self = this;

      // Static content
      app.use(express.static('www'));

      // Dynamic api content
      routing()
        .then(function (result) {

          if(result) {

            self.msg('Express - Routing applied.');

            deferred.resolve(result);

          } else {

            self.msg('Express - Routing has failed!');

            return process.exit(0);

          }

        });

      return deferred.promise;

    },

    afterMiddleware: function () {

      var after = require('./app/middleware/after'),

        deferred = Q.defer(),

        self = this;

      after()
        .then(function (result) {

          self.msg('Express - After Middlewares applied.');

          if(result) {

            deferred.resolve(result);

          } else {

            self.msg('Express - Failed to apply middlewares after routes!');

            return process.exit(0);

          }

        });

      return deferred.promise;

    },

    start: function () {

      var self = this,

        port = self.getPort(),

        deferred = Q.defer(),

        instance = app.listen(port, function () {

        deferred.resolve(instance);

      });

      return deferred.promise;

    }

  };

module.exports = Server;
