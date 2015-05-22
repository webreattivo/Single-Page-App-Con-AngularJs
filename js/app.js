var rubricaApp = angular.module('rubrica', ['ngRoute']);

rubricaApp.config(function($routeProvider) {
    $routeProvider

        // home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'listController'
        })

        // add contact
        .when('/add', {
            templateUrl : 'views/add.html',
            controller  : 'addController'
        })

        // edit contact
        .when('/edit/:id', {
            templateUrl : 'views/edit.html',
            controller  : 'editController'
        })

        // delete contact
        .when('/delete/:id', {
            templateUrl : 'views/delete.html',
            controller  : 'deleteController'
        })
});
