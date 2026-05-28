const { expect } = require( "chai" );
const nock = require( "nock" );
const postsEndpoint = require( "../../lib/endpoints/posts" );
const testHelper = require( "../../lib/test_helper" );

describe( "Posts", ( ) => {
  describe( "for_user", ( ) => {
    it( "fetches posts relevant to a user", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/posts/for_user" )
        .reply( 200, [{ id: 1, body: "testpost" }] );
      postsEndpoint.for_user( ).then( posts => {
        expect( posts[0].id ).to.eq( 1 );
        expect( posts[0].body ).to.eq( "testpost" );
        expect( posts[0].constructor.name ).to.eq( "Post" );
        done( );
      } );
    } );
    it( "authenticates requests", done => {
      nock( "http://localhost:4000", { reqheaders: { Authorization: "key" } } )
        .get( "/v1/posts/for_user" )
        .reply( 200, [{ id: 1, body: "testpost" }] );
      postsEndpoint.for_user( {}, { api_token: "key" } ).then( ( ) => done( ) );
    } );

    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "returns an object", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/posts/for_user" )
          .reply( 200, {
            total_results: 1,
            page: 1,
            per_page: 1,
            results: [{
              id: 1
            }]
          } );
        postsEndpoint.for_user( ).then( response => {
          expect( response.total_results ).to.eq( 1 );
          expect( response.results[0].id ).to.eq( 1 );
          expect( response.results[0].constructor.name ).to.eq( "Post" );
          done( );
        } );
      } );
    } );
  } );

  describe( "search", ( ) => {
    it( "fetches posts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/posts" )
        .reply( 200, [{ id: 1, body: "testpost" }] );
      postsEndpoint.search( ).then( posts => {
        expect( posts[0].id ).to.eq( 1 );
        expect( posts[0].body ).to.eq( "testpost" );
        done( );
      } );
    } );
    it( "fetches posts by project", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/posts?project_id=123" )
        .reply( 200, [{ id: 1, body: "testpost" }] );
      postsEndpoint.search( { project_id: 123 } ).then( posts => {
        expect( posts[0].id ).to.eq( 1 );
        expect( posts[0].body ).to.eq( "testpost" );
        done( );
      } );
    } );
  } );

  describe( "create", ( ) => {
    it( "posts to /posts", done => {
      nock( "http://localhost:3000" )
        .post( "/posts", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      postsEndpoint.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "adds an authorization header for the api_token", done => {
      nock( "http://localhost:3000", { reqheaders: { Authorization: "key" } } )
        .post( "/posts", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      postsEndpoint.create( { body: "testbody" }, { api_token: "key" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /posts", done => {
      nock( "http://localhost:3000" )
        .put( "/posts/1", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      postsEndpoint.update( { id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      postsEndpoint.update( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /posts", done => {
      nock( "http://localhost:3000" )
        .delete( "/posts/1" )
        .reply( 200, { id: 1 } );
      postsEndpoint.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );

    it( "throws errors", done => {
      postsEndpoint.delete( { any: "thing" } ).catch( e => {
        expect( e.message ).to.eq( "id required" );
        done( );
      } );
    } );
  } );
} );
