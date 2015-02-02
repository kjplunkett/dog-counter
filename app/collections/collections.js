// Dog Collection - Backbone Collection
'use strict';

var Backbone = require('backbone');
var DogModel = require('../models/index.js');

/**
 * @class DogsCollection
 * @classdec Collection of DogModel models
 * @extends Backbone.Collection
 */
var DogsCollection = Backbone.Collection.extend({
	model: DogModel
});

module.exports = DogsCollection;
