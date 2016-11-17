var assert = require( 'assert' ),
	webdriver = require( 'selenium-webdriver' ),
	By = webdriver.By,
	test = require( 'selenium-webdriver/testing' );

test.describe( 'User', function () {
	var driver;

	test.before( function () {
		driver = new webdriver.Builder()
		.forBrowser( 'firefox' )
		.build();
	} );

	test.after( function () {
		driver.quit();
	} );

	test.it( 'should be able to create account', function () {
		driver.get( 'http://127.0.0.1:8080/wiki/Special:CreateAccount' );
		driver.findElement( By.id( 'wpCreateaccount' ) ).isDisplayed().then( function ( displayed ) {
			assert( displayed );
		} );
	} );
} );
