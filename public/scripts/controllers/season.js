'use strict';

angular.module('eb')

  .controller('SeasonCtrl', [
    '$scope',
    'season',
    function ($scope, season) {

      angular.extend($scope, {

        'season': season

      });

  }]

);
