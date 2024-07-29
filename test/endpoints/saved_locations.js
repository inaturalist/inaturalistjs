const { expect } = require( "chai" );
const nock = require( "nock" );
const savedLocations = require( "../../lib/endpoints/saved_locations" );

describe( "SavedLocations", ( ) => {
  const savedLocation = {
    latitude: 1.1,
    longitude: 2.2,
    title: "SavedLocation",
    positional_accuracy: 33,
    geoprivacy: "open"
  };
  describe( "search", ( ) => {
    it( "fetches saved locations", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/saved_locations" )
        .reply( 200, [{ id: 1 }] );
      savedLocations.search( ).then( results => {
        expect( results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "create", ( ) => {
    it( "posts to /saved_locations", done => {
      nock( "http://localhost:3000" )
        .post( "/saved_locations", savedLocation )
        .reply( 200, { id: 1 } );
      savedLocations.create( savedLocation ).then( ( ) => {
        done( );
      } );
    } );

    it( "adds an authorization header for the api_token", done => {
      nock( "http://localhost:3000", { reqheaders: { Authorization: "key" } } )
        .post( "/saved_locations", savedLocation )
        .reply( 200, { id: 1 } );
      savedLocations.create( savedLocation, { api_token: "key" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "does nothing with empty params", done => {
      nock( "http://localhost:3000" )
        .post( "/saved_locations", { } )
        .reply( 200, { id: 1 } );
      savedLocations.create( ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /saved_locations", done => {
      nock( "http://localhost:3000" )
        .delete( "/saved_locations/1" )
        .reply( 200, { id: 1 } );
      savedLocations.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      savedLocations.delete( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );
} );
