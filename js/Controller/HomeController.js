'use strict';

app.controller('HomeController', ['$scope', '$state', function($scope, $state) {
	
	$scope.init = function() {
		
		if (!$scope.user.name) {
			
			$state.go('login');
			return;
		}
		
		$scope.user.isLoggedIn = true;
	};
	
	$scope.init();
}]);
