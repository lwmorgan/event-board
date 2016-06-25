
var mongoose = require('mongoose'),

  Schema = new mongoose.Schema({

  name: String,

  displayName: String,

  banner: String,

  adminPword: String,

  seasons : [ {

        name: String,

        active: Boolean,

        banner: String,

        events: [{

          start: Date,

          end: Date,

          title: String,

          location: String,

          comments: String,

          // images: [],

          // activeImage: {},

          result: String

        }],

        members: [{

          firstName: String,

          lastName: String,

          school: String,

          position: String

      }]

    }

  ]

});

module.exports = Schema;
