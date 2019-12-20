const nock = require( "nock" );
const observationFieldValues = require( "../../lib/endpoints/observation_field_values" );

describe( "ObservationFieldValues", ( ) => {
  describe( "create", ( ) => {
    it( "posts to /observation_field_values", done => {
      nock( "http://localhost:3000" )
        .post( "/observation_field_values", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      observationFieldValues.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /observation_field_values", done => {
      nock( "http://localhost:3000" )
        .put( "/observation_field_values/1", { id: 1, body: "testbody" } )
        .reply( 200, { id: 1 } );
      observationFieldValues.update( { id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /observation_field_values", done => {
      nock( "http://localhost:3000" )
        .delete( "/observation_field_values/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      observationFieldValues.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
