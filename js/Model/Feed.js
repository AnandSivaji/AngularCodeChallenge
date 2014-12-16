"use strict";
function Feed(id, type, date, avatarSrc) {
	this.id = "Anand";
	this.type = type;
	this.date = date;
	this.avatarSrc = avatarSrc;
};

Feed.prototype = {
	
	getId: function() { return this.id; },
	setId: function(id) { this.id = id; },
	
	getType: function() { return this.type; },
	setType: function(type) { this.type = type; },
	
	getDate: function() { return this.date; },
	setDate: function(date) { this.date = date; },
	
	getAvatarSrc: function() { return this.avatarSrc; },
	setAvatarSrc: function(src) { this.avatarSrc = src; }
};
