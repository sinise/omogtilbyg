
var portApp = angular.module('portApp', [
    'ngRoute',
    'thisControllers'

]);

portApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/forside', {
        templateUrl: 'partials/carousel.html',
        controller: 'mainControler'
    }).when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UserController'
    }).when('/kontakt', {
        templateUrl: 'partials/kontakt.html',
        controller: 'UserController'
    }).when('/authenticate', {
        templateUrl: 'partials/authenticate.html',
        controller: 'UserController'
    }).
    otherwise({
        redirectTo: '/berths'
    });
}]);


