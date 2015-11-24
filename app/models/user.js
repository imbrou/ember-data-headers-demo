import
DS
from
'ember-data';

export default
DS.Model.extend({
	username: DS.attr('string'),
	description: DS.attr('string'),
	summary: DS.attr('string'),
	email: DS.attr('string'),
	password: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	googleId: DS.attr('string'),
	facebookId: DS.attr('string'),
	twitterAccount: DS.attr('string'),
	gender: DS.attr('string'),
	locale: DS.attr('string'),
	image: DS.attr('string', { defaultValue: 'images/default-user.png' }),
	notifResponse: DS.attr('number'),
	safeImage: function () {
		if (this.get('image') == "" || !this.get('image')) {
			return "images/default-user.png";
		} else {
			return this.get('image');
		}
	}.property('image'),
	cover: DS.attr('string'),
	safeCover: function () {
		if (this.get('cover') == "" || !this.get('cover')) {
			return "images/default-user.png"; //TEMP
		} else {
			return this.get('cover');
		}
	}.property('image'),

	fullName: function () {
		var firstName = this.get('firstName');
		var lastName = this.get('lastName');

		if (firstName == null && lastName == null) {
			return this.get('username');
		} else if (firstName != null && lastName == null) {
			return firstName;
		} else if (firstName == null && lastName != null) {
			return  lastName;
		} else {
			return firstName + ' ' + lastName;
		}
	}.property('firstName', 'lastName'),

	stakeholdings: DS.hasMany('stakeholding', { async: true }),
	comments: DS.hasMany('comment', { async: true }),
	issuesCreated: DS.hasMany('issue', { async: true }),
	actions: DS.hasMany('action', { async: true })
});
