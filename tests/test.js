// Mocha tests
'use strict';

// Require npm installed pacakges
var assert = require('assert');
var _ = require('underscore');

// Require my created node modules
var DogModel = require('../app/models/index.js');
var DogsCollection = require('../app/collections/collections.js');

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
	describe('.bark()', function () {
		it('should return take a name String parameter and return a bark string with that name', function () {
			var dogModel = new DogModel();
			var actualBark = dogModel.bark('John');
			var expectedBark = "Rex says 'woof' to John";
			assert.equal(actualBark, expectedBark);
		});
	});
});

describe('DogsCollection', function() {
	describe('.add()', function() {
		it('should add a dog Model to the collection', function() {
			var dogsCollection = new DogsCollection();
			var dogModel = new DogModel();
			dogsCollection.add(dogModel);
			var length = _.size(dogsCollection);
			assert.equal(1, length);
		});
	});
	describe('.toJSON()', function() {
		it('should return the collection in a JSON format', function () {
			var dogsCollection = new DogsCollection();
			var dogModel = new DogModel();
			dogsCollection.add(dogModel);
			var expectedOutput = [{
				name: 'Rex',
				age: 1,
				color: 'brown',
				loved: true
			}];
			assert.deepEqual(dogsCollection.toJSON(), expectedOutput);
		});
	});
});
