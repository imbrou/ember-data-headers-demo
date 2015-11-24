import
DS
from
'ember-data';

export default
DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),
	issue: DS.belongsTo('issue', { async: true }),
	root: DS.belongsTo('comment', { async: false }),
	comments: DS.hasMany('comment', {
		inverse: 'root'
	}, { async: true }),

	title: DS.attr('string'),
	content: DS.attr('string'),
	dateSent: DS.attr('date'),
	globalRelevancy: DS.attr('number'),
	userRelevancy: DS.attr('number'),
	status: DS.attr('string'),
	step: DS.attr('number'),
	isDeleted: function () {
		if (this.get('status') === "deleted") {
			return true;
		} else {
			return false;
		}
	}.property('status'),
	isRoot: function () {
		if (this.get('root') === null) {
			return true;
		} else {
			return false;
		}
	}.property('root'),
	displayDate: function () {
		return moment(this.get('dateSent')).fromNow();
	}.property('dateSent'),
});
