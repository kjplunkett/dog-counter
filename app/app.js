// The one that puts it all together...
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var DogModel = require('models/index.js');
var DogsCollection = require('collections/collections.js');
var DogCompositeView = require('views/composite/index.js');

/**
 * @class Application
 * @classdesc The main front-end connector
 * @extends Marionette.Application
 */
var Application = new Marionette.Application();

Application.addRegions({
	container: '#container'
});

Application.on('start', function () {

	// Log that the app started up
	console.log('app started');
	var dogModel1 = new DogModel();
	var dogModel2 = new DogModel();

	var dogsCollection = new DogsCollection();
	dogsCollection.add(dogModel1);
	dogsCollection.add(dogModel2);
	var dogCompositeView = new DogCompositeView({ collection: dogsCollection });
	Application.container.show(dogCompositeView);

});

Application.start();

module.exports = Application;
