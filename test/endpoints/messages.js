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
  describe( "search", ( ) => {
    it( "should include messages", done => {
      nock( "http://localhost:3000" )
        .get( "/messages" )
        .reply( 200, { results: [{ id: 1 }] } );
      messages.search( ).then( r => {
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );
  describe( "delete", ( ) => {
    it( "respond with success", done => {
      nock( "http://localhost:3000" )
        .delete( "/messages/1" )
        .reply( 200, { } );
      messages.delete( { id: 1 } ).then( ( ) => {
        // this should just complete without an error
        done( );
      } );
    } );
    it( "throws an error if the message doesn't exist", done => {
      nock( "http://localhost:3000" )
        .delete( "/messages/1" )
        .reply( 404, { error: "not found" } );
      messages.delete( { id: 1 } )
        .catch( e => {
          expect( e.response.status ).to.eq( 404 );
          done( );
        } );
    } );
  } );
  describe( "unread", ( ) => {
    it( "should include messages", done => {
      nock( "http://localhost:3000" )
        .get( "/messages/count" )
        .reply( 200, { count: 1 } );
      messages.unread( ).then( r => {
        expect( r.count ).to.eq( 1 );
        done( );
      } );
    } );
  } );
} );
