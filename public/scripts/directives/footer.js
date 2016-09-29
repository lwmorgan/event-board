'use strict';

angular.module('eb')

  .directive('ebFooter', [
    'FOOTER',
    'PACKAGE',
    function (FOOTER) {

      return {

        'restrict': 'E',

        'replace': true,

        'templateUrl': 'views/directives/footer.html',

        controller: function ($scope, FOOTER, PACKAGE) {

          angular.extend($scope, {

            links: FOOTER.links,

            version: PACKAGE.version

          });

        }

      };

    }

  ]);
