angular.module('rubrica')

    .controller('listController', ['$scope', 'rubricaService', function ($scope, rubricaService) {

        $scope.listContacts = {};
        $scope.hideNoresultMessage = true;

        rubricaService.getContacts()
            .success(function (response) {
                $scope.listContacts = response.data;
            })
            .error(function () {
                $scope.hideNoresultMessage = false;
            });

    }])

    .controller('addController', ['$scope', '$location', 'rubricaService', function ($scope, $location, rubricaService) {

        $scope.contact = {};
        $scope.hideNoSaveMessage = true;

        $scope.newContact = function () {

            rubricaService.newContact($scope.contact)
                .success(function () {
                    $location.path('');
                })
                .error(function () {
                    $scope.hideNoSaveMessage = false;
                });
        };
    }])

    .controller('editController', ['$scope', '$location', '$routeParams', 'rubricaService', function ($scope, $location, $routeParams, rubricaService) {

        $scope.contact = {};
        $scope.hideNoSaveMessage = true;

        rubricaService.getContact($routeParams.id)
            .success(function (response) {
                $scope.contact = response.data;
            })
            .error(function () {
                $scope.hideNoDeleteMessage = false;
            });

        $scope.editContact = function () {

            rubricaService.editContact($scope.contact)
                .success(function () {
                    $location.path('');
                })
                .error(function () {
                    $scope.hideNoSaveMessage = false;
                });
        };

    }])

    .controller('deleteController', ['$scope', '$location', '$routeParams', 'rubricaService', function ($scope, $location, $routeParams, rubricaService) {

        $scope.hideNoDeleteMessage = true;

        rubricaService.getContact($routeParams.id)
            .success(function (response) {
                $scope.contact = response.data;
            })
            .error(function () {
                $scope.hideNoDeleteMessage = false;
            });

        $scope.deleteContact = function (id) {

            rubricaService.deleteContact(id)
                .success(function () {
                    $location.path('');
                })
                .error(function () {
                    $scope.hideNoDeleteMessage = false;
                });
        };
    }]);