var mongoose = require('mongoose'),

  schema = require('./schemas/group');

var Model = mongoose.model('group', schema);

module.exports = Model;
