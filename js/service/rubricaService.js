angular.module('rubrica').service('rubricaService', function ($http) {

    var service = {};

    var apiEndpoint = 'http://10.0.33.34:3000/api/';

    service.getContacts = function () {
        return $http.get(apiEndpoint + 'contact');
    };

    service.getContact = function (id) {
        return $http.get(apiEndpoint + 'contact/' + id);
    };

    service.newContact = function (contact) {
        return $http.post(apiEndpoint + 'contact', contact);
    };

    service.editContact = function (contact) {
        return $http.post(apiEndpoint + 'contact/' + contact._id, contact);
    };

    service.deleteContact = function (contact) {
        return $http.delete(apiEndpoint + 'contact/' + contact);
    };

    return service;
});