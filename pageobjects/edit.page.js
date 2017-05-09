// thanks to https://watirmelon.blog/2015/10/30/webdriverjs-mocha-part-3-page-objects/
var webdriver = require( 'selenium-webdriver' ),
	config = require( 'config' ),
	baseUrl = config.get( 'baseUrl' );

function EditPage( driver ) {
	this.driver = driver;
	this.baseUrl = baseUrl;
}

EditPage.prototype.visit = function ( name ) {
	this.driver.get( this.baseUrl + name + '&action=edit' );
	return webdriver.promise.fulfilled( true );
};

module.exports = EditPage;
