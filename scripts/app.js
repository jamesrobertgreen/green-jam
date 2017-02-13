var app = angular.module('greenJam', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html'
        , controller: 'mainController'
    }).when('/linux', {
        templateUrl: 'pages/linux.html'
    }).when('/code', {
        templateUrl: 'pages/code.html'
    }).when('/web', {
        templateUrl: 'pages/web.html'
    }).when('/scrum', {
        templateUrl: 'pages/scrum.html'
    }).when('/contact', {
        templateUrl: 'pages/contact.html'
    }).otherwise({
        redirectTo: '/'
    });
});
