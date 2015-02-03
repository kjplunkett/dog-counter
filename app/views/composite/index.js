// Dog Composite View - Marionette Composite View
'use strict';

var Marionette = require('backbone.marionette');
var DogItemView = require('../index.js');

/**
 * @class DogCompositeView
 * @classdesc Displays a table for the DogItemView
 * @extends Marionette.CompositeView
 */
var DogCompositeView = Marionette.CompositeView.extend({
	childView: DogItemView,

	// Specify jQuery selector to insert the childView into
	childViewContainer: 'tbody',

	// Load the Composite Template in the index.html
	template: '#composite-template'

});

module.exports = DogCompositeView;
