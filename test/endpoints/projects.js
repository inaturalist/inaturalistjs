const { expect } = require( "chai" );
const nock = require( "nock" );
const projects = require( "../../lib/endpoints/projects" );
const testHelper = require( "../../lib/test_helper" );

describe( "Projects", ( ) => {
  describe( "fetch", ( ) => {
    it( "fetches projects by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/projects/1" )
        .reply( 200, testHelper.mockResponse );
      projects.fetch( 1 ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/projects/1" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "Project" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "join", ( ) => {
    it( "posts to /projects/:id/join", done => {
      nock( "http://localhost:3000" )
        .post( "/projects/1/join" )
        .reply( 200, { } );
      projects.join( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "leave", ( ) => {
    it( "deletes to /projects/:id/leave", done => {
      nock( "http://localhost:3000" )
        .delete( "/projects/1/leave" )
        .reply( 200, { } );
      projects.leave( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "add", ( ) => {
    it( "posts to /projects/:id/add", done => {
      nock( "http://localhost:3000" )
        .post( "/projects/1/add" )
        .reply( 200, { id: 1 } );
      projects.add( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "deletes to /projects/:id/remove", done => {
      nock( "http://localhost:3000" )
        .delete( "/projects/1/remove" )
        .reply( 200, { id: 1 } );
      projects.remove( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "autocomplete", ( ) => {
    it( "gets autocomplete results", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/projects/autocomplete?q=Animals" )
        .reply( 200, testHelper.mockResponse );
      projects.autocomplete( { q: "Animals" } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/projects/autocomplete?q=Animals" );
        done( );
      } );
    } );
  } );

  describe( "create", ( ) => {
    it( "posts to /projects", done => {
      nock( "http://localhost:3000" )
        .post( "/projects" )
        .reply( 200, { id: 1 } );
      projects.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /projects/:id", done => {
      nock( "http://localhost:3000" )
        .put( "/projects/1" )
        .reply( 200, { id: 1 } );
      projects.update( { id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );

    it( "escapes non-ascii IDs", done => {
      const nonAsciiName = "高中校";
      const escapedName = encodeURI( nonAsciiName );
      nock( "http://localhost:3000" )
        .put( `/projects/${escapedName}` )
        .reply( 200, { slug: nonAsciiName } );
      projects.update( { id: nonAsciiName, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /projects/:id", done => {
      nock( "http://localhost:3000" )
        .delete( "/projects/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      projects.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "posts", ( ) => {
    it( "gets posts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/projects/1/posts" )
        .reply( 200, testHelper.mockResponse );
      projects.posts( { id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/projects/1/posts" );
        done( );
      } );
    } );
  } );

  describe( "subscribe", ( ) => {
    it( "posts to /subscriptions/Project/:id/subscribe", done => {
      nock( "http://localhost:3000" )
        .post( "/subscriptions/Project/1/subscribe" )
        .reply( 200, { id: 1 } );
      projects.subscribe( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "subscriptions", ( ) => {
    it( "gets posts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/projects/1/subscriptions" )
        .reply( 200, testHelper.mockResponse );
      projects.subscriptions( { id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/projects/1/subscriptions" );
        done( );
      } );
    } );
  } );

  describe( "members", ( ) => {
    it( "gets /projects/:id/members", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/projects/1/members" )
        .reply( 200, testHelper.mockResponse );
      projects.members( { id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/projects/1/members" );
        done( );
      } );
    } );
  } );

  describe( "feature", ( ) => {
    it( "puts to /projects/:id/feature", done => {
      nock( "http://localhost:3000" )
        .put( "/projects/1/feature", { id: 1 } )
        .reply( 200, { id: 1 } );
      projects.feature( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "unfeature", ( ) => {
    it( "puts to /projects/:id/unfeature", done => {
      nock( "http://localhost:3000" )
        .put( "/projects/1/unfeature", { id: 1 } )
        .reply( 200, { id: 1 } );
      projects.unfeature( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
