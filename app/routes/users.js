import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {

	model(params) {
		return this.store.query('article', { page: {
			number: params.page,
			size: params.size
		}
		});
	},

	queryParams: {
		page: {
			refreshModel: true
		},
		size: {
			refreshModel: true
		}
	}

});