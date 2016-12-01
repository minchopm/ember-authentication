import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

	normalizeQueryResponse(store, clazz, payload) {
		// ...
	},

	createPageMeta(data) {

		let meta = {};

		Object.keys(data).forEach(type => {
			const link = data[type];
			meta[type] = {};
			let a = document.createElement('a');
			a.href = link;

			a.search.slice(1).split('&').forEach(pairs => {
				const [param, value] = pairs.split('=');

				if (param == 'page%5Bnumber%5D') {
					meta[type].number = parseInt(value);
				}
				if (param == 'page%5Bsize%5D') {
					meta[type].size = parseInt(value);
				}

			});
			a = null;
		});

		return meta;

	}

});