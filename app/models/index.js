// Dog Model - Backbone Model 
'use strict';

var Backbone = require('backbone');

var DogModel = Backbone.Model.extend ({
	defaults: {
		name: 'Rex',
		age: 1,
		color: 'brown',
		loved: true
	}
});
module.exports = DogModel;