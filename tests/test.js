// Mocha tests
'use strict';

// Require external pacakges
var expect = require('chai').expect;
var assert = require('assert');
var Backbone = require('backbone');

// Require my packages
var DogModel = require('../app/models/dogModel.js');

describe('DogModel', function () {
	describe('.toJSON()', function() {
		it('should return a set of default values for the Dog Model', function () {
			var defaults = [{
				name: 'Rex',
				age: 1,
				color: 'brown',
				loved: true
			}];
			var dogModel = new DogModel();
			assert.equal(defaults, dogModel.toJSON());
		});
	});
});