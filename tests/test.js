// Mocha tests
'use strict';

// Require external pacakges
var assert = require('assert');

// Require my packages
var DogModel = require('../app/models/index.js');

describe('DogModel', function () {
	describe('.toJSON()', function() {
		it('should return a set of default values for the Dog Model', function () {
			var defaults = {
				name: 'Rex',
				age: 1,
				color: 'brown',
				loved: true
			};
			var dogModel = new DogModel();
			assert.deepEqual(defaults, dogModel.toJSON());
		});
	});
});
