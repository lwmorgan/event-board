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

      // $scope.isActive = function (stateName) {
      //
      //   return $state.includes(stateName);
      //
      // };

  }]);
