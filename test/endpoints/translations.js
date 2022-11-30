const nock = require( "nock" );
const translations = require( "../../lib/endpoints/translations" );
const testHelper = require( "../../lib/test_helper" );

describe( "Translations", ( ) => {
  describe( "fetch", ( ) => {
    it( "gets from /translations/locales", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/translations/locales" )
        .reply( 200, testHelper.mockResponse );
      translations.locales( ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
