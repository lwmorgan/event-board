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

            'url': '/season/:year/:name',

            'templateUrl': 'views/pages/season/index.html',

            'controllerAs': 'seasonController',

            'controller': 'SeasonCtrl',

            'resolve': {

              'season': [
                '$stateParams',
                'Season',
                function ($stateParams, Season) {

                  console.log('IN RESOLVE!');

                  return Season.find($stateParams.year, $stateParams.name).then(function (result) {

                    console.log('IN RESOLVE CALLBACK!', result);

                    return result;

                  });

                }

              ]

            }

        })

        .state('app.about', {

            url: '/about',

            templateUrl: 'views/pages/about/index.html'

        });

      $urlRouterProvider.otherwise('/');

  }]);
