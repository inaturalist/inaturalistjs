const { expect } = require( "chai" );
const nock = require( "nock" );
const featureFlags = require( "../../lib/endpoints/feature_flags" );
const testHelper = require( "../../lib/test_helper" );

describe( "FeatureFlags", ( ) => {
  describe( "get", ( ) => {
    beforeEach( testHelper.v1ToV2 );
    afterEach( testHelper.v2ToV1 );

    const response = {
      flags: { client_demo_banner: true },
      experiments: { hello_world: null }
    };

    it( "gets from /v2/feature_flags and returns the body unchanged", done => {
      nock( "http://localhost:4000" )
        .get( "/v2/feature_flags" )
        .reply( 200, response );
      featureFlags.get( ).then( r => {
        expect( r ).to.deep.eq( response );
        done( );
      } );
    } );

    it( "adds an authorization header for the api_token", done => {
      nock( "http://localhost:4000", { reqheaders: { Authorization: "key" } } )
        .get( "/v2/feature_flags" )
        .reply( 200, response );
      featureFlags.get( { }, { api_token: "key" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "sends no authorization header without an api_token", done => {
      nock( "http://localhost:4000", { badheaders: ["Authorization"] } )
        .get( "/v2/feature_flags" )
        .reply( 200, response );
      featureFlags.get( ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
