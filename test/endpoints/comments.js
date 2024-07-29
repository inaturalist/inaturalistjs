const { expect } = require( "chai" );
const nock = require( "nock" );
const comments = require( "../../lib/endpoints/comments" );

describe( "Comments", ( ) => {
  describe( "create", ( ) => {
    it( "posts to /comments", done => {
      nock( "http://localhost:3000" )
        .post( "/comments", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      comments.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "adds an authorization header for the api_token", done => {
      nock( "http://localhost:3000", { reqheaders: { Authorization: "key" } } )
        .post( "/comments", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      comments.create( { body: "testbody" }, { api_token: "key" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "does nothing with empty params", done => {
      nock( "http://localhost:3000" )
        .post( "/comments", { } )
        .reply( 200, { id: 1 } );
      comments.create( ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /comments", done => {
      nock( "http://localhost:3000" )
        .put( "/comments/1", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      comments.update( { id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      comments.update( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /comments", done => {
      nock( "http://localhost:3000" )
        .delete( "/comments/1" )
        .reply( 200, { id: 1 } );
      comments.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      comments.delete( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );
} );
