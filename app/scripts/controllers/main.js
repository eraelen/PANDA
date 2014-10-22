'use strict';

/**
 * @ngdoc function
 * @name pandaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pandaApp
 */
angular.module('pandaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
