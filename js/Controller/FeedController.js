'use strict';

app.controller('FeedController', ['$scope', '$state', function($scope, $state) {
	
	$scope.feeds = [];
	
	$scope.createFeed = function() {
		
		var input = $scope.feedInput;
		
		var isUrl = input.isUrl();
		var feed = isUrl ? new URLFeed(input) : new TextFeed(input);
					
		feed.id = +new Date();
		feed.type = isUrl ? 'URL' : 'TYPE';
		feed.date = new Date();
		
		$scope.feeds.push(feed);
		$scope.feedInput = '';
	};
	
	$scope.onDelete = function(feedId) {
		
		for (var i = 0, j = $scope.feeds.length; i < j; i++) {
			
			if ($scope.feeds[i].getId() === feedId) {
				
				$scope.feeds.splice(i, 1);
				return;
			}
		}
	}; 
}]);
