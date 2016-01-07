//import Ember from "ember";
import DS from 'ember-data';
import config from '../config/environment' ;

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: config.APP.API_HOST,

	/*
	 * http://emberjs.com/api/data/classes/DS.RESTAdapter.html#toc_headers-customization
	 */

	// Attempt 1:
	headers: { "Authorization": "Bearer ZBLA" },

	// Attempt 2:
	/*
	headers: function() {
		return { "Authorization": "Bearer ZBLA" } ;
	},
	*/
	
	// Attempt 3:
	/*
	headers: function() {
		return { "Authorization": "Bearer ZBLA" } ;
	}.volatile(),
	*/
	
	/*
	 * http://discuss.emberjs.com/t/passing-the-querystring-in-the-headers-of-a-rest-call/8270
	 */

	// Attempt 4:
	/*
	ajax: function() {
	  var headers = this.get('headers') || {} ;
	  Ember.merge(headers, {"Authorization": "Bearer ZBLA"}) ;
	  console.log("Added headers.") ;
	  return this._super.apply(this, arguments) ;
	},
	*/

	buildURL: function (record, suffix) {
		return this._super(record, suffix) + '.php';
	},

	shouldReloadAll: function () { return true ; }
});

