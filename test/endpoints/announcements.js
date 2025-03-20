const { expect } = require( "chai" );
const nock = require( "nock" );
const announcements = require( "../../lib/endpoints/announcements" );

describe( "Announcements", ( ) => {
  describe( "search", ( ) => {
    it( "fetches announcements", done => {
      nock( "http://localhost:3000" )
        .get( "/announcements/active" )
        .reply( 200, [{ id: 1, body: "test announcement" }] );
      announcements.search( ).then( results => {
        expect( results[0].id ).to.eq( 1 );
        expect( results[0].body ).to.eq( "test announcement" );
        done( );
      } );
    } );
  } );

  describe( "dismiss", ( ) => {
    it( "puts to /announcements/:id/dismiss", done => {
      nock( "http://localhost:3000" )
        .put( "/announcements/1/dismiss" )
        .reply( 204 );
      announcements.dismiss( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      announcements.dismiss( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );
} );
