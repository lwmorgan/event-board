'use strict';

angular.module('eb')

  .controller('AppCtrl', ['$scope', 'group', function ($scope, group) {

      angular.extend($scope, {

        'group': group

      });

  }]);
