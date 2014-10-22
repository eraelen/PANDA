'use strict';

/**
 * @ngdoc function
 * @name pandaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pandaApp
 */
angular.module('pandaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
