var app = angular.module("app",[]);

app.directive("formVerify",function(){
	'use strict';

	return {
		require: '^form',
		scope: {
			submit: '&',
			submitted: '='
		},

		link: function(scope,element,attrs,form){
			element.on('submit',function(){
				scope.$apply(function(){
					if(form.$valid){
						return scope.submit();
					}
					scope.submitted = true;
				})
			})
		}
	}
});