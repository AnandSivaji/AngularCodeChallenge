/**
 * Created by Anand Sivaji on 09/12/14
 */

app.directive('feedDirective', [ function() {

	return {
		restrict : 'A',
		scope: {
			
			feed: '=',
			createdDate: '='
		},
		template: '<div class="col-lg-2 col-md-2 col-sm-2 mb-feed-item-avatar"></div>'+
				  	 '<div class="col-lg-10 col-md-10 col-sm-10">' +
				  	 	'<div class="col-lg-12 col-md-12 col-sm-12"> ' +
				  	 		'<button class="pull-right mb-feed-delete-btn"></button>' + 
				  	 	'</div>' +
				  	 	'<div class="col-lg-12 col-md-12 col-sm-12">' +
				  	 		'<a ng-if="isUrlFeed()"/>' +
				  	 		'<div ng-if="!isUrlFeed()"> </div>' +
				  	 	'</div>' +
				  	 	'<div class="col-lg-12 col-md-12 col-sm-12 mb-feed-created-date">' +
				  	 		
				  	 	'</div>' +
				  	 '<div>',
					
		link: function($scope, $elem, $attrs, $ctrl) {
	
			console.log($attrs.feed);
			isUrlFeed = function() {
				
				return true;
			};
		}
	};
}]);
