const { expect } = require( "chai" );
const nock = require( "nock" );
const computervision = require( "../../lib/endpoints/computervision" );

describe( "Computervision", ( ) => {
  describe( "score_image", ( ) => {
    it( "posts to score_image", done => {
      nock( "http://localhost:4000" )
        .post( "/v1/computervision/score_image" )
        .reply( 200, { results: [{ taxon: { id: 1 } }] } );
      computervision.score_image( { body: "testbody" } ).then( r => {
        expect( r.results[0].taxon.id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "score_observation", ( ) => {
    it( "gets scores for observations", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/computervision/score_observation/1" )
        .reply( 200, { results: [{ taxon: { id: 1 } }] } );
      computervision.score_observation( { id: 1 } ).then( r => {
        expect( r.results[0].taxon.id ).to.eq( 1 );
        done( );
      } );
    } );
  } );
} );
