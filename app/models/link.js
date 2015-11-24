import
DS
from
'ember-data';

export default
DS.Model.extend({
	issue: DS.belongsTo('issue', { async: true }),
	user: DS.belongsTo('user', { async: true }),

	title: DS.attr('string'),
	summary: DS.attr('string'),
	description: DS.attr('string'),
	globalRelevancy: DS.attr('number'),
	userRelevancy: DS.attr('number'),
	image: DS.attr('string'),
	step: DS.attr('number'),
	date: DS.attr('date'),
	trackingCount: DS.attr('number'),

	shortDescription: function () {
		var description = this.get('description');

		if (description == null) {
			return '';
		} else if (description.length > 180) {
			return (description.substr(0, 180) + '...');
		} else {
			return description;
		}
	}.property('shortDescription'),

	url: DS.attr('string'),

	/**
	 * Extracts the domain name from the link's URL.
	 */
	domain: function () {
		var domain;
		var url = this.get('url');

		//find & remove protocol (http, ftp, etc.) and get domain
		if (url.indexOf("://") > -1)
			domain = url.split('/')[2];
		else
			domain = url.split('/')[0];
		//find & remove port number
		domain = domain.split(':')[0];

		return domain;
	}.property('url'),

	displayDate: function () {
		return moment(this.get('date')).fromNow();
	}.property('date')

});
