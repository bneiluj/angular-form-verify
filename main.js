var app = angular.module("app", []);

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

app.directive("formVerify", function() {
    'use strict';

    return {
        require: '^form',
        scope: {
            submit: '&',
            submitted: '='
        },

        link: function(scope, element, attrs, form) {
            element.on('submit', function() {
                scope.$apply(function() {
                    if (form.$valid) {
                        return scope.submit();
                    }
                    scope.submitted = true;
                })
            })
        }
    }
});
