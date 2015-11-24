import DS from 'ember-data' ;
import { translationMacro as t } from "ember-i18n" ;

export default DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),
	issue: DS.belongsTo('issue', { async: true }),

	title: DS.attr('string'),
	summary: DS.attr('string'),
	step: DS.attr('number'),
	date: DS.attr('date'),
	globalRelevancy: DS.attr('number'),
	userRelevancy: DS.attr('number'),
	trackingCount: DS.attr('number'),
	yetToComment: DS.attr('boolean'),

	typeLocale: function () {
		return t('issue.stakeholding.type.' + this.get('type'));
	}.property('type'),

	displayDate: function () {
		return moment(this.get('date')).fromNow();
	}.property('date')
});
