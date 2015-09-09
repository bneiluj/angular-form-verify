var app = angular.module("app", ['angular-form-verify']);

app.controller("loginCtrl", function($scope) {
    'use strict';

    $scope.login = function(form) {
        var email = form.email.$modelValue,
            password = form.password.$modelValue;
        /**
         * You can call the service here
         */
        alert("Logged in");
    }
});
