'use strict';

angular.module('eb')

  .directive('memberNail', [

    function () {

      return {

        'restrict': 'E',

        'replace': true,

        'templateUrl': 'views/directives/member-nail.html',

        'scope': {

          'member': '='

        }

      };

    }

  ]);
