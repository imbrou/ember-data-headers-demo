import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// Enable promise errors logging
Ember.RSVP.on('error',  function(error) {
  Ember.Logger.assert(false,  error);
});

// Log classic errors
Ember.onerror = function(error) {
	Ember.$.ajax('/error-notification',  {
		type: 'POST', 
		data: {
			stack: error.stack, 
			otherInformation: 'exception message'
		}
	});
};

loadInitializers(App, config.modulePrefix);

// Attempt 3:
/*
Ember.$.ajaxSetup({
	headers: { 'Authorization': 'Bearer ZBLA' }
});
//console.log("Added headers.") ;
*/

// Attempt 4:
/*
Ember.$.ajaxSetup({
	beforeSend: function(xhr) {
		xhr.withCredentials = true;
		xhr.setRequestHeader(
			'Authorization', 'Bearer ZBLA'
		);
	}
});
*/

export default App;
