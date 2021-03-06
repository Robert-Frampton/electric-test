'use strict';

var marble = require('marble');

module.exports = {
	envOptions: {
		ghpages: {
			base: '/electric-test/',
			deployOptions: {
				branch: 'gh-pages'
			}
		}
	},
	metalComponents: ['electric-marble-components'],
	sassOptions: {
		includePaths: ['node_modules', marble.src]
	},
	vendorSrc: ['node_modules/marble/build/fonts/**']
};
