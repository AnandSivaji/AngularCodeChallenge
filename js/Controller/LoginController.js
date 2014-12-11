'use strict';

app.controller('LoginController', ['$scope', '$state', function($scope, $state) {
	
	$scope.onLoginClicked = function() {
		
		if ($scope.user.name === 'anandkumars' && $scope.user.password === 'test') {
			
			$scope.user.isLoggedIn = true;
			$state.go('home');	
		}
	};
	
	$scope.onLogOutClicked = function() {
		
		$scope.user.name = '';
		$scope.user.password = ''; 
		$scope.user.isLoggedIn = false;
		
		$state.go('login');		
	};
}]);
