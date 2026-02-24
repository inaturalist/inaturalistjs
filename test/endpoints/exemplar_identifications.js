const { expect } = require( "chai" );
const nock = require( "nock" );
const exemplarIdentifications = require( "../../lib/endpoints/exemplar_identifications" );
const testHelper = require( "../../lib/test_helper" );

describe( "ExemplarIdentifications", ( ) => {
  describe( "search", ( ) => {
    it( "fetches exemplar_identifications", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/exemplar_identifications" )
        .reply( 200, [{ id: 1 }] );
      exemplarIdentifications.search( { } ).then( results => {
        expect( results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "vote", ( ) => {
    it( "posts to /votes/vote/exemplar_identification/:id", done => {
      nock( "http://localhost:3000" )
        .post( "/votes/vote/exemplar_identification/1" )
        .reply( 200, { id: 1 } );
      exemplarIdentifications.vote( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "posts to /exemplar_identifications/:id/vote", done => {
        nock( "http://localhost:4000" )
          .post( "/v2/exemplar_identifications/1/vote" )
          .reply( 200, { id: 1 } );
        exemplarIdentifications.vote( { id: 1 } ).then( ( ) => {
          done( );
        } );
      } );
    } );
  } );

  describe( "unvote", ( ) => {
    it( "deletes to /votes/unvote/exemplar_identification/:id", done => {
      nock( "http://localhost:3000" )
        .delete( "/votes/unvote/exemplar_identification/1" )
        .reply( 200, { id: 1 } );
      exemplarIdentifications.unvote( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "deletes to /exemplar_identifications/:id/vote", done => {
        nock( "http://localhost:4000" )
          .delete( "/v2/exemplar_identifications/1/vote" )
          .reply( 200, { id: 1 } );
        exemplarIdentifications.unvote( { id: 1 } ).then( ( ) => {
          done( );
        } );
      } );
    } );
  } );
} );
