'use strict';

angular.module('eb')

  .controller('AppCtrl', ['$scope', '$state', 'group', function ($scope, $state, group) {

      angular.extend($scope, {

        'group': group,

        '$state': $state

      });

  }]);
