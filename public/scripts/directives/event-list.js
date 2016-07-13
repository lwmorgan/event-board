'use strict';

angular.module('eb')

  .directive('eventList', [

    function () {

      return {

        'restrict': 'E',

        'replace': true,

        'templateUrl': 'views/directives/event-list.html',

        'scope': {

          'events' : '='

        }

      };

    }

  ]);
