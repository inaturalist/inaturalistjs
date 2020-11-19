const { expect } = require( "chai" );
const nock = require( "nock" );
const sites = require( "../../lib/endpoints/sites" );

describe( "Sites", ( ) => {
  describe( "fetch", ( ) => {
    const stub = {
      id: 1,
      name: "iNaturalist"
    };
    it( "should return sites", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/sites" )
        .reply( 200, { results: [stub] } );
      sites.fetch( ).then( r => {
        expect( r.results[0].id ).to.eq( stub.id );
        expect( r.results[0].name ).to.eq( stub.name );
        done( );
      } );
    } );
  } );
} );
