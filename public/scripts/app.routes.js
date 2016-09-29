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

            'controllerAs': 'appController',

            'controller': 'AppCtrl',

            'resolve': {

              'group': [
                '$stateParams',
                'Group',
                function ($stateParams, Group) {

                  var getActiveSeason = function (seasons) {

                    var activeSeason;

                    angular.forEach(seasons, function (season) {

                      if(!activeSeason) {

                        activeSeason = season.active ? { year: season.year, name: season.name } : undefined;

                      }

                    });

                    return activeSeason;

                  };

                  // HACK: This needs to be configured somewhere, or pulled out of URL eventually?
                  var groupName = 'titans';

                  return Group.findByName(groupName).then(function (result) {

                    var group = result;

                    group.activeSeason = getActiveSeason(group.seasons);

                    return group;

                  });

                }

              ]

            }

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

                  return Season.find($stateParams.year, $stateParams.name).then(function (result) {

                    return result;

                  });

                }

              ]

            }

        })

        .state('app.season.events', {

            url: '/events',

            templateUrl: 'views/pages/season/events.html'

        })

        .state('app.season.roster', {

            url: '/roster',

            templateUrl: 'views/pages/season/roster.html'

        })

        .state('app.about', {

            url: '/about',

            templateUrl: 'views/pages/about/index.html'

        });

      // EXAMPLE OF HOW I WOULD PASS OBJECT GRAPH TO CHILD UI ROUTER STATES (w/out subsequent API calls)!
      // $rootScope.$on('$stateChangeStart', function (ev, toState, toParams, fromState, fromParams) {
      //
      //   // toState.year
      //   // toState.name
      //   if(toState.name === 'app.season') {
      //
      //     Season.activeSeason = activeSeasons[asdklsak];
      //
      //   }
      //
      //   $scope.season = Season.getActiveSeason();
      //
      // });

      $urlRouterProvider.otherwise('/');

  }]);
