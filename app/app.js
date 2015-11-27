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

loadInitializers(App, config.modulePrefix);

/*
 * http://discuss.emberjs.com/t/passing-header-information-to-rest-get-request-using-restadapter/4220
 */

// Attempt 5:
/*
Ember.$.ajaxSetup({
	headers: { 'Authorization': 'Bearer ZBLA' }
});
console.log("Added headers.") ;
*/

// Attempt 6:
/*
Ember.$.ajaxSetup({
	beforeSend: function(xhr) {
		//xhr.withCredentials = true;
		xhr.setRequestHeader(
			'Authorization', 'Bearer ZBLA'
		);
		console.log("Added headers.") ;
	}
});
*/

/*
 * http://stackoverflow.com/questions/31171268/emberjs-ember-data-customize-http-header
 */

// Attempt 7:
/*
Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
   jqXHR.setRequestHeader("Authorization", "Bearer ZBLA") ;
	console.log("Added headers.") ;
});
*/

export default App;
