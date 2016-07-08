'use strict';

angular.module('eb')

  .controller('AppCtrl', ['$scope', function ($scope) {

      $scope.name = 'World';

      $scope.activeSeason = {

        name: '2016 Spring'

      };

      $scope.items = [
          "The first choice!",
          "And another choice for you.",
          "but wait! A third!"
      ];

      $scope.items = [
        { name: 'Fall', year: '2016' },
        { name: 'Spring', year: '2016' },
        { name: 'Fall', year: '2015' },
        { name: 'Summer', year: '2015' }
      ];


      // $scope.isActive = function (stateName) {
      //
      //   return $state.includes(stateName);
      //
      // };

  }]);
