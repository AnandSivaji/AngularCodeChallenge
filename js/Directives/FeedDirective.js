/**
 * Created by Anand Sivaji on 09/12/14
 */

app.directive('feedDirective', function() {

	return {
		restrict : 'E',
		scope: {
			
			feeds: '=',
			onDelete: '&'
		},
		template: '<ul class="mb-feed-list"><li ng-repeat="feed in feeds">' +
					   '<div class="col-lg-2 col-md-2 col-sm-2 mb-feed-item-avatar"></div>' +
					  	 '<div class="col-lg-10 col-md-10 col-sm-10">' +
					  	 	'<div class="col-lg-12 col-md-12 col-sm-12"> ' +
					  	 		'<button class="pull-right mb-feed-delete-btn" ng-click="onDelete({feedId: feed.getId()})"></button>' + 
					  	 	'</div>' +
					  	 	'<div class="col-lg-12 col-md-12 col-sm-12">' +
					  	 		'<a href="{{feed.getFeed()}}" target="_blank" ng-if="isUrlFeed(feed)">{{feed.getFeed()}}</a>'  +
					  	 		'<div ng-if="!isUrlFeed(feed)">{{feed.getFeed()}}</div>' +
					  	 	'</div>' +
					  	 	'<div class="col-lg-12 col-md-12 col-sm-12 mb-feed-created-date">' +
					  	 		'{{feed.getDate().format()}}' +
					  	 	'</div>' +
					  	 '<div>' +
					 '</li></ul>',
					
		link: function($scope, $elem, $attrs, $ctrl) {
	
			$scope.isUrlFeed = function(feed) {
				return feed instanceof URLFeed;
			};
		}
	};
});
