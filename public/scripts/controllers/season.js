'use strict';

angular.module('eb')

  .controller('SeasonCtrl', [
    '$scope',
    'season',
    function ($scope, season) {

      console.log('IN Contoller!', season);

      $scope.season = season;

  }]

);
