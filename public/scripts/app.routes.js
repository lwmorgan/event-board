'use strict';

angular.module('eb')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('app', {

            'abstract': true,

            'templateUrl': 'views/app.html',

            'controller': 'AppCtrl'

        })

        .state('app.home', {

            'url': '/',

            'templateUrl': 'views/pages/home/index.html'

        })

        .state('app.season', {

            'url': '/events/:year/:name',

            'templateUrl': 'views/pages/season/index.html',

            controller: function ($scope, $stateParams) {

              $scope.season = { year: $stateParams.year,  name: $stateParams.name };

            }

        })

        .state('app.about', {

            url: '/about',

            templateUrl: 'views/pages/about/index.html'

        });

      $urlRouterProvider.otherwise('/');

  }]);
