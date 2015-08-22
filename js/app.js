var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
    .when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'})
    .when('/contact', {templateUrl:'partials/contact.html', controller:'ContactCtrl'})
    .when('/gallery', {templateUrl:'partials/gallery.html', controller:'GalleryCtrl'})
    .when('/home', {templateUrl:'partials/home.html', controller:'HomeCtrl'})
    .when('/sponsors', {templateUrl:'partials/sponsors.html', controller:'SponsorsCtrl'})
    .when('/teams', {templateUrl:'partials/teams.html', controller:'TeamsCtrl'})
    .when('/tryouts', {templateUrl:'partials/tryouts.html', controller:''})
    .otherwise('/404', {templateUrl: 'partials/404.html', controller: 'ErrCtrl'});
}]);


app.constant('API_URL', 'https://nash-int-futbol-club.firebaseapp.com');

