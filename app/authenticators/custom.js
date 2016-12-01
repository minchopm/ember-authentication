import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
export default Base.extend({
	tokenEndpoint: 'http://cosmosapitest.websplanetdemo.com/oauth/token',
	// tokenEndpoint: 'http://localhost:3001/sessions/create',
	restore: function (data) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},
	authenticate: function (options) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			Ember.$.ajax({
				url: this.tokenEndpoint,
				type: 'POST',
				data: jQuery.param({
					username: options.identification,
					password: options.password,
					grant_type: 'password'
				}),

				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: "Basic anJGY3hnOGpDRDFteHQ6RjhMMTJsRUljaEFEQUM="
				},
				dataType: 'json'
			}).then(function (response) {
				Ember.run(function () {
					resolve({
						token: response.access_token,
						token_type: response.token_type,
					});
				});
			}, function (xhr, status, error) {
				var response = xhr.responseText;
				Ember.run(function () {
					reject(response);
				});
			});
		});
	},
	invalidate: function () {
		console.log('invalidate...');
		return Ember.RSVP.resolve();
	}
});