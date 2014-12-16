'use strict';
function TextFeed(text) {
	this.text = text;
}

TextFeed.prototype = Object.create(Feed.prototype);
TextFeed.prototype.getFeed = function() { return this.text; };
