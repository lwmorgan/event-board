'use strict';

angular.module('eb')

  .directive('collapsiblePanel', [

    function () {

      return {

        'restrict': 'E',

        'replace': true,

        'transclude': {

          'header': 'panelHeader',

          'content': 'panelContent'

        },

        'templateUrl': 'views/directives/collapsible-panel.html'

      };

    }

  ]);
