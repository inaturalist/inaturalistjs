const { expect } = require( "chai" );
const nock = require( "nock" );
const places = require( "../../lib/endpoints/places" );
const testHelper = require( "../../lib/test_helper" );

describe( "Places", ( ) => {
  describe( "fetch", ( ) => {
    it( "fetches places by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/places/1" )
        .reply( 200, testHelper.mockResponse );
      places.fetch( 1 ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/places/1" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "Place" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "autocomplete", ( ) => {
    describe( "v1", ( ) => {
      it( "succeeds", done => {
        nock( "http://localhost:4000" )
          .get( "/v1/places/autocomplete" )
          .reply( 200 );
        places.autocomplete( { } ).then( ( ) => {
          done( );
        } );
      } );
    } );

    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "raises an error", done => {
        expect( ( ) => {
          places.autocomplete( { } );
        } ).to.throw(
          "API v2 does not support places.autocomplete. Use places.search instead."
        );
        done( );
      } );
    } );
  } );

  describe( "search", ( ) => {
    describe( "v1", ( ) => {
      it( "raises an error", done => {
        expect( ( ) => {
          places.search( { } );
        } ).to.throw(
          "API v1 does not support places.search. Use places.autocomplete instead."
        );
        done( );
      } );
    } );

    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "succeeds", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/places" )
          .reply( 200 );
        places.search( { } ).then( ( ) => {
          done( );
        } );
      } );
    } );
  } );

  describe( "containing", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/places/containing" )
        .reply( 200 );
      places.containing( { } ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
