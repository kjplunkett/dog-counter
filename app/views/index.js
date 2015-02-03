// Dog View - Marionette Item View
'use strict';

var Marionette = require('backbone.marionette');

/**
 * @class DogItemView
 * @classdesc Displays individual dog models
 * @extends Marionette.ItemView
 */
var DogItemView = Marionette.ItemView.extend({
	tagName: 'tr',

	// Load the Item View template in the HTML
	template: '#item-template'

});

module.exports = DogItemView;
