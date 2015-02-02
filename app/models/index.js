// Dog Model - Backbone Model
'use strict';

var Backbone = require('backbone');

/**
 * @class DogModel
 * @classdec Model for Dogs
 * @extends Backbone.Model
 */
var DogModel = Backbone.Model.extend({
	defaults: {
		name: 'Rex',
		age: 1,
		color: 'brown',
		loved: true
	},

	/**
	* Barks at another a person
	* @param {String} person String of someone's name
	* @return {String} the bark string
	*/
	bark: function (person) {
		return this.get('name') + " says 'woof' to " + person;
	}
});
module.exports = DogModel;
