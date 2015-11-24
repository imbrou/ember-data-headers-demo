import
DS
from
'ember-data';
import
{
	translationMacro
	as
	t
}
from
"ember-i18n";

export default
DS.Model.extend({
	issue: DS.belongsTo('issue', { async: true }),
	user: DS.belongsTo('user', { async: true }),

	title: DS.attr('string'),
	summary: DS.attr('string'),
	description: DS.attr('string'),
	url: DS.attr('string'),
	image: DS.attr('string'),
	step: DS.attr('number'),
	date: DS.attr('date'),
	globalRelevancy: DS.attr('number'),
	userRelevancy: DS.attr('number'),
	trackingCount: DS.attr('number'),

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

	typeLocale: function () {
		return t('spec.action.type.' + this.get('type'));
	}.property('type'),

	displayDate: function () {
		return moment(this.get('date')).fromNow();
	}.property('date')
});
