var Server = require('./server');

Server
  .database().then(function () {

    Server
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
                    .msg('showcase running on http://' + host + ':' + port);

                });

            });

        });

      });

  });
