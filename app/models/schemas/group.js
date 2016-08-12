
var mongoose = require('mongoose'),

  Schema = new mongoose.Schema({

  name: String,

  displayName: String,

  banner: String,

  adminPword: String,

  seasons : [ {

        year: String,

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

          result: String,

          moments: [{

            _id: mongoose.Schema.Types.ObjectId,

            imageId: mongoose.Schema.Types.ObjectId,

            name: String,

            comment: String

          }]

        }],

        members: [{

          firstName: String,

          lastName: String,

          school: String,

          position: String,

          imageId: mongoose.Schema.Types.ObjectId

      }]

    }

  ]

});

module.exports = Schema;
