'use strict';

angular.module('eb')

  .controller('AppCtrl', ['$scope', function ($scope) {

      $scope.name = 'World';

      $scope.activeSeason = {

        name: '2016 Spring 11U'

      };

      $scope.items = [
        // { name: 'Fall', year: '2016' },
        { name: 'Spring 11U', year: '2016' },
        { name: 'Fall 11U', year: '2015' }
        //, { name: 'Summer', year: '2015' }
      ];

  }]);
