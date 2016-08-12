var Server = require('./server');

Server
  .database().then(function () {

    Server
      .configure()
      .beforeMiddleware().then(function () {

        Server
          .routes().then(function () {

          Server
            .afterMiddleware().then(function () {

              Server
                .start().then(function (instance) {

                  var address = instance.address(),

                    host = address.address === '::' ? 'localhost' : address.address,

                    port = address.port;

                  Server
                    .msg('event-board running on http://' + host + ':' + port);

                });

            });

        });

      });

  });
