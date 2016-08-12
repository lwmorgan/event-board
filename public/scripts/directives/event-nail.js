'use strict';

angular.module('eb')

  .directive('eventNail', [

    function () {

      return {

        'restrict': 'E',

        'replace': true,

        'templateUrl': 'views/directives/event-nail.html',

        'scope': {

          'src' : '@',

          'caption': '@'

        }

      };

    }

  ]);
