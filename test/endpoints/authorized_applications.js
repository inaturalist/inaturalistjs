const { expect } = require( "chai" );
const nock = require( "nock" );
const iNaturalistAPI = require( "../../lib/inaturalist_api" );
const authorizedApplications = require( "../../lib/endpoints/authorized_applications" );

describe( "AuthorizedApplications", ( ) => {
  describe( "search", ( ) => {
    const stub = {
      application: {
        id: 1,
        name: "flaming peanut butter sword"
      },
      created_at: "2020-10-29T13:25:40+14:00",
      scopes: [
        "login",
        "write"
      ]
    };
    it( "should return an expected response", done => {
      const nockScope = nock( "http://localhost:4000" )
        .get( "/v1/authorized_applications" )
        .reply( 200, {
          results: [stub]
        } );
      authorizedApplications.search( ).then( r => {
        nockScope.done( );
        expect( r.results[0].constructor.name ).to.eq( "AuthorizedApplication" );
        expect( r.results[0].application.id ).to.eq( stub.application.id );
        expect( r.results[0].application.name ).to.eq( stub.application.name );
        expect( r.results[0].created_at ).to.eq( stub.created_at );
        expect( r.results[0].scopes[0] ).to.eq( stub.scopes[0] );
        done( );
      } );
    } );
  } );
  describe( "delete", ( ) => {
    it( "deletes to /oauth/authorized_applications by default", done => {
      const nockScope = nock( "http://localhost:3000" )
        .delete( "/oauth/authorized_applications/1" )
        .reply( 200, {} );
      authorizedApplications.delete( { id: 1 } ).then( ( ) => {
        nockScope.done( );
        done( );
      } );
    } );
    it( "deletes to /v1/authorized_applications if writing to node", done => {
      const existing = iNaturalistAPI.writeApiURL;
      iNaturalistAPI.writeApiURL = "http://localhost:4000/v1";
      const nockScope = nock( "http://localhost:4000" )
        .delete( "/v1/authorized_applications/1" )
        .reply( 200, {} );
      authorizedApplications.delete( { id: 1 } ).then( ( ) => {
        nockScope.done( );
        done( );
      } );
      iNaturalistAPI.writeApiURL = existing;
    } );
  } );
} );
