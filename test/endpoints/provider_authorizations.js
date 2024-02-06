const { expect } = require( "chai" );
const nock = require( "nock" );
const iNaturalistAPI = require( "../../lib/inaturalist_api" );
const providerAuthorizations = require( "../../lib/endpoints/provider_authorizations" );

describe( "ProviderAuthorizations", ( ) => {
  describe( "search", ( ) => {
    const stub = {
      id: 1234,
      provider_name: "orcid",
      provider_uid: "0000-0001-0002-0004",
      user_id: 1,
      created_at: "2020-11-12 21:40:02.779904",
      updated_at: "2020-11-12 21:40:02.779904",
      scope: ""
    };
    it( "should return an expected response", done => {
      const nockScope = nock( "http://localhost:4000" )
        .get( "/v1/provider_authorizations" )
        .reply( 200, {
          results: [stub]
        } );
      providerAuthorizations.search( ).then( r => {
        nockScope.done( );
        expect( r.results[0].constructor.name ).to.eq( "ProviderAuthorization" );
        expect( r.results[0].provider_uid ).to.eq( stub.provider_uid );
        expect( r.results[0].provider_name ).to.eq( stub.provider_name );
        done( );
      } );
    } );
  } );
  describe( "delete", ( ) => {
    it( "deletes to /provider_authorizations by default", done => {
      const nockScope = nock( "http://localhost:3000" )
        .delete( "/provider_authorizations/1" )
        .reply( 200, {} );
      providerAuthorizations.delete( { id: 1 } ).then( ( ) => {
        nockScope.done( );
        done( );
      } );
    } );
    it( "deletes to /v1/provider_authorizations if writing to node", done => {
      const existing = iNaturalistAPI.writeApiURL;
      iNaturalistAPI.writeApiURL = "http://localhost:4000/v1";
      const nockScope = nock( "http://localhost:4000" )
        .delete( "/v1/provider_authorizations/1" )
        .reply( 200, {} );
      providerAuthorizations.delete( { id: 1 } ).then( ( ) => {
        nockScope.done( );
        done( );
      } );
      iNaturalistAPI.writeApiURL = existing;
    } );
  } );
} );
