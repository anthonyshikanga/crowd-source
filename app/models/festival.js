import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr(),
	category:DS.attr(),
	image:DS.attr(),
	shortdescription:DS.attr(),
	content:DS.attr(),
	price:DS.attr(),
	openDate:DS.attr(),
	location:DS.attr(),
	venueImage:DS.attr(),
	ticketImage:DS.attr(),
	artist:DS.attr(),
	artistImage:DS.attr(),
	reviews:DS.hasMany('review', {async:true})


});
