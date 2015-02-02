module.exports = function (grunt) {

'use strict';

	// Load plugins
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-eslint');

    // Project config
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    	mochaTest: {
    		test: {
    			options: {
    				reporter: 'spec'
    			},
    			src: ['tests/*.js']
    		}
    	},
    	eslint: {
    		config: '.eslintrc',
    		target: ['tests/*.js']
    	}
    });

	// Register tasks
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('default', ['eslint']);
};
