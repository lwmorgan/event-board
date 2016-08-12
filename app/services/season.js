var q = require('q'),

  _ = require('lodash'),

  Group = require('../models/group'),

  fs = require('fs'),

  mongoose = require('mongoose'),

  Grid = require('gridfs-stream'),

  GridFS = Grid(mongoose.connection.db, mongoose.mongo);


module.exports = {

  find: function (year, name) {

    var deferred = q.defer();

    Group.find({seasons: {$elemMatch: {year: year, name: name}}}, {_id: 0, "seasons.$":1}, function(err, groups) {

      var seasons = _.map(groups, 'seasons'),

        season = (seasons && seasons.length) ? seasons[0][0] : null;


      if (err || !season) {

        throw err;

      }

      deferred.resolve(season);

    });

    return deferred.promise;

  },

  addMoment: function (year, name, eventName, moment) {

    var deferred = q.defer();

    var findGroup = function (year, name) {

      var deferred = q.defer();

      Group.find(function (err, groups) {

        deferred.resolve(groups[0]);

      });

      return deferred.promise;

    };


    var writeStream = GridFS.createWriteStream({

      fileName: moment.name

    });

    writeStream.on('close', function (file) {

      var imageId = file._id;

      findGroup(year, name)
        .then(function (group) {

          // Find and update the event with the newly generated image id
          var season = _.find(group.seasons, { 'year': year, 'name': name }),

            seasonEvent = _.find(season.events, { 'title': eventName }),

            eventMoment = { 'imageId': imageId, 'name': moment.name, 'comment': moment.comment };

          // Add the moment to the event
          seasonEvent.moments.push(eventMoment);

          // Persist changes
          group.save(function (err) {

            if(err) {

              return deferred.resolve({

                'success': false,

                'msg': 'An error occured when attempting to add a moment to the season\'s event.'

              });

            } else {

              return deferred.resolve(eventMoment);

            }

          });

        });

    });


    // TODO: Get from config
    // var imagePath = '/images/' + moment.imageName;
    var imagePath = 'temp-img-load/' + moment.imageName;

    // Perform the read of the image file and corresponding write to mongo
    fs.createReadStream(imagePath).pipe(writeStream);

    return deferred.promise;

  },

  updateMember: function (year, name, member) {

    var deferred = q.defer();

    var findGroup = function (year, name) {

      var deferred = q.defer();

      Group.find(function (err, groups) {

        deferred.resolve(groups[0]);

      });

      return deferred.promise;

    };

    var persistMemberChange = function (seasonYear, seasonName, member, imageId) {

      findGroup(year, name)
        .then(function (group) {

          // Find the referenced member
          var season = _.find(group.seasons, { 'year': year, 'name': name }),

            seasonMember = _.find(season.members, { 'lastName': member.lastName, 'firstName': member.firstName });

          // Update the referenced member with newly generated image id
          if(imageId) {

            seasonMember.imageId = imageId;

          }

          // Update the member
          seasonMember.school = member.school;
          seasonMember.position = member.position;

          // Persist changes
          group.save(function (err) {

            if(err) {

              return deferred.resolve({

                'success': false,

                'msg': 'An error occured when attempting to update a member of the season.'

              });

            } else {

              return deferred.resolve(seasonMember);

            }

          });

        });

    };


    if(member.imageName) {

      var writeStream = GridFS.createWriteStream({

        fileName: member.lastName + ', ' + member.firstName

      });

      writeStream.on('close', function (file) {

        delete member.imageName;

        persistMemberChange(year, name, member, file._id);

      });


      // TODO: Get from config
      // var imagePath = '/images/' + member.imageName;
      var imagePath = 'temp-img-load/' + member.imageName;

      // Perform the read of the image file and corresponding write to mongo
      fs.createReadStream(imagePath).pipe(writeStream);

    }
    else {

      persistMemberChange(year, name, member);

    }

    return deferred.promise;

  }

};
