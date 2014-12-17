'use strict';

app.controller('ProfileController', ['$scope', '$state', function($scope, $state) {
	
	$scope.profile = {};
	
	$scope.onCreateProfileClicked = function() {
		
		var newProfile = new Profile();
			
		newProfile.name = $scope.profile.name;
		newProfile.age = parseInt($scope.profile.age);
		newProfile.phone = parseInt($scope.profile.phone);
		newProfile.email = $scope.profile.email;
		newProfile.address = $scope.profile.address;
		newProfile.pic = $scope.profile.picture;
		
		$scope.profile = {};
		
		alert("Profile created successfully");	
	};
	
	$scope.onFileUpload = function(element) {
		
		var fileReader = new FileReader();
		fileReader.readAsDataURL(element.files[0]);

		fileReader.onload = function(event) {
			
			$scope.profile.picture = event.target.result;
			document.getElementById("profileImage").src = event.target.result;
		};
	};
}]);
