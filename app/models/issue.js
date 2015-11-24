import
DS
from
'ember-data';

export default
DS.Model.extend({
	title: DS.attr('string'),
	tag: DS.attr('string'),
	summary: DS.attr('string'),
	description: DS.attr('string'),
	dateBegin: DS.attr('date'),
	dateEnd: DS.attr('date'),
	image: DS.attr('string', {
		defaultValue: 'http://s3.postimg.org/4e4w0lcfm/2toegang_centrum_via_Gronusestraat_Langenkamp.jpg'
	}),
	state: DS.attr('string'),
	locale: DS.attr('string'),
	initiatorName: DS.attr('string'),
	initiatorDescription: DS.attr('string'),
	currentStep: DS.attr('number', {defaultValue: 0}),

	URLTitle: function () {
		// See http://bit.ly/1Iecpmw and http://bit.ly/1OmcQji
		// -> URI encoding methods & best practices.
		// Note:
		// I don't understand why encodeURIComponent doesn't encode '%'.
		return encodeURIComponent(this.get('title').replace(/%/g, '%25').replace(/ /g, '_'));
	}.property('title'),

	initiatorStakeholding: function () {
		var stakeholdings = this.get('stakeholdings'),
				user = this.get('user'),
				initiator = null;

		stakeholdings.forEach(function (stakeholding) {
			// if statements here.
			// Mind you that a return function returns to forEach! so set a
			// var instead of use filterBy.
			if (stakeholding.get('user.id') === user.get('id')) {
				initiator = stakeholding;
			}
		});

		return initiator;
	}.property('stakeholdings', 'user'),

	user: DS.belongsTo('user', { async: true }),
	links: DS.hasMany('link', { async: true }),
	stakeholdings: DS.hasMany('stakeholding', { async: true }),
	comments: DS.hasMany('comment', { async: true }),
	actions: DS.hasMany('action', { async: true }),

	// WAITING FOR BACKEND IMPLEMENTATION
	takenActions: 42

	//didLoad: function(){
	//    var self = this;
	//    setInterval(function() {self.reload();}, 5*1000); //every 5 seconds
	//}
});
