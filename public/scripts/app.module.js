'use strict';

var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('AppCtrl', function($scope) {

    $scope.name = 'World';

    $scope.activeSeason = {

      name: '2016 Spring'

    };

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];

});
