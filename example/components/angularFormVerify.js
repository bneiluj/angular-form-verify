angular
    .module('angular-form-verify', [])
    .directive("angularFormVerify", function() {

    'use strict';

    console.log("directive");
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
