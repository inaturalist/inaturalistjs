const { expect } = require( "chai" );
const nock = require( "nock" );
const messages = require( "../../lib/endpoints/messages" );

describe( "Messages", ( ) => {
  describe( "create", ( ) => {
    it( "posts to /messages", done => {
      nock( "http://localhost:3000" )
        .post( "/messages", { to_user_id: 1, body: "testbody" } )
        .reply( 200, { id: 1, body: "testbody" } );
      messages.create( { to_user_id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );
  describe( "fetch", ( ) => {
    it( "should include messages", done => {
      nock( "http://localhost:3000" )
        .get( "/messages/1" )
        .reply( 200, { results: [{ id: 1 }] } );
      messages.fetch( { id: 1 } ).then( r => {
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );
} );
