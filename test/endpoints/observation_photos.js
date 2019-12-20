const { expect } = require( "chai" );
const nock = require( "nock" );
const observationPhotos = require( "../../lib/endpoints/observation_photos" );

describe( "ObservationPhotos", ( ) => {
  describe( "create", ( ) => {
    it( "posts to /observation_photos", done => {
      nock( "http://localhost:3000" )
        .post( "/observation_photos" )
        .reply( 200, { id: 1 } );
      observationPhotos.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /observation_photos/:id", done => {
      nock( "http://localhost:3000" )
        .put( "/observation_photos/1" )
        .reply( 200, { id: 1 } );
      observationPhotos.update( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /observation_photos/:id", done => {
      nock( "http://localhost:3000" )
        .delete( "/observation_photos/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      observationPhotos.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      observationPhotos.delete( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );
} );
