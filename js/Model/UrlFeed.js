'use strict';
function URLFeed(url) {
	this.url = url;
}

URLFeed.prototype = new Feed();
URLFeed.prototype.getFeed = function() { return this.url; };
