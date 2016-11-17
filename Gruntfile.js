module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig( {

		// Configure a jshint task
		jshint: {
			all: [ 'Gruntfile.js', 'test/**/*.js' ],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configure a mochaTest task
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					timeout: 100000
				},
				src: [ 'test/**/*.js' ]
			}
		}

	} );

	// Default task(s).
	grunt.registerTask( 'default', [ 'jshint', 'mochaTest' ] );

};
