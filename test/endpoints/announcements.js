const { expect } = require( "chai" );
const nock = require( "nock" );
const announcements = require( "../../lib/endpoints/announcements" );
const iNaturalistAPI = require( "../../lib/inaturalist_api" );

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

    it( "fetches from /v1/announcements if writing to node", done => {
      const existing = iNaturalistAPI.writeApiURL;
      iNaturalistAPI.writeApiURL = "http://localhost:4000/v1";
      nock( "http://localhost:4000" )
        .get( "/v1/announcements" )
        .reply( 200, [{ id: 1, body: "test announcement" }] );
      announcements.search( ).then( results => {
        expect( results[0].id ).to.eq( 1 );
        expect( results[0].body ).to.eq( "test announcement" );
        done( );
      } );
      iNaturalistAPI.writeApiURL = existing;
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
