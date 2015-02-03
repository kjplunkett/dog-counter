'use strict';

module.exports = function (grunt) {

	// Load plugins
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-browserify');

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
    		target: ['tests/*.js',
                     'app/**/*.js']
    	},
        browserify: {
            'static/bundle.js': ['app/app.js']
        }
    });

	// Register tasks
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('build', ['browserify']);
};
