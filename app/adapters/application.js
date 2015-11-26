//import Ember from "ember";
import DS from 'ember-data';
import config from '../config/environment' ;

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: config.APP.API_HOST,

	// Attempt 1:
	// Works when commenting "host" field.
	//headers: { "Authorization": "Bearer ZBLA" },

	// Attempt 2:
	/*
	ajax: function() {
	  //debugger ;
	  var headers = this.get('headers') || {} ;
	  Ember.merge(headers, {"Authorization": "Bearer ZBLA"}) ;
	  //console.log("Added headers.") ;
	  return this._super.apply(this, arguments) ;
	},
	*/

	buildURL: function (record, suffix) {
		return this._super(record, suffix) + '.php';
	},

	shouldReloadAll: function () { return true ; }
});

