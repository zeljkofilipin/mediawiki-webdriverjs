module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig( {

		// Configure ESLint task
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			]
		},

		// Configure a mochaTest task
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					timeout: 10000
				},
				src: [ 'test/**/*.js' ]
			}
		}

	} );

	// Default task(s).
	grunt.registerTask( 'default', [ 'eslint' ] );

};
