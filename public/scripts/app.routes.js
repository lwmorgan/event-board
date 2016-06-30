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

        .state('app.about', {

            url: '/about',

            templateUrl: 'views/pages/about/index.html'

        });

      $urlRouterProvider.otherwise('/');

  }]);
