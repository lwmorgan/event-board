'use strict';

angular.module('eb')

  .directive('memberList', [

    function () {

      return {

        'restrict': 'E',

        'replace': true,

        'templateUrl': 'views/directives/member-list.html',

        'scope': {

          'members' : '='

        }
        
      };

    }

  ]);
