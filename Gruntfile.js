module.exports = function (grunt) {

    // Project config
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    	mochaTest: {
    		test: {
    			options: {
    				reporter: 'spec',

    			},
    			src: ['tests/*.js']
    		}
    	}
    });
    
    // Load plugins
	grunt.loadNpmTasks('grunt-mocha-test');

	// Register tasks
	grunt.registerTask('test',['mochaTest']);
};