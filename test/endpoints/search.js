const { expect } = require( "chai" );
const nock = require( "nock" );
const search = require( "../../lib/endpoints/search" );
const testHelper = require( "../../lib/test_helper" );

describe( "Search", ( ) => {
  describe( "fetch", ( ) => {
    it( "gets from /search", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, testHelper.mockResponse );
      search( ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/search" );
        expect( r.total_results ).to.eq( 1 );
        done( );
      } );
    } );

    it( "constructs Place objects from records", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Place",
            record: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].record.constructor.name ).to.eq( "Place" );
        done( );
      } );
    } );

    it( "constructs Place objects from places", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Place",
            place: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].place.constructor.name ).to.eq( "Place" );
        done( );
      } );
    } );

    it( "constructs Project objects from records", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Project",
            record: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].record.constructor.name ).to.eq( "Project" );
        done( );
      } );
    } );

    it( "constructs Project objects from projects", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Project",
            project: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].project.constructor.name ).to.eq( "Project" );
        done( );
      } );
    } );

    it( "constructs Taxon objects from records", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Taxon",
            record: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].record.constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );

    it( "constructs Taxon objects from taxa", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "Taxon",
            taxon: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].taxon.constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );

    it( "constructs User objects from records", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "User",
            record: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].record.constructor.name ).to.eq( "User" );
        done( );
      } );
    } );

    it( "constructs User objects from users", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/search" )
        .reply( 200, {
          results: [{
            type: "User",
            user: {
              id: 1
            }
          }]
        } );
      search( ).then( r => {
        expect( r.results[0].user.constructor.name ).to.eq( "User" );
        done( );
      } );
    } );
  } );
} );
