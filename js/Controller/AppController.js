'use strict';

app.controller('AppController', ['$scope', '$state', function($scope, $state) {
	
	$scope.user = {
		name: 'anandkumars',
		password: 'test',
		isLoggedIn: false
	};
	
	$scope.onMenuClick = function(path) {
		$state.go(path);		
	};
}]);
