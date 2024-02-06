const { expect } = require( "chai" );
const _ = require( "lodash" );
const nock = require( "nock" );
const users = require( "../../lib/endpoints/users" );
const testHelper = require( "../../lib/test_helper" );

const veryLongFieldsObject = _.fromPairs( _.map( _.range( 1, 500 ), i => (
  [`field${i}`, true]
) ) );

describe( "Users", ( ) => {
  describe( "fetch", ( ) => {
    it( "fetches users by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/users/1" )
        .reply( 200, testHelper.mockResponse );
      users.fetch( 1 ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/users/1" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "User" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );

    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );

      it( "accepts fields string", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/users/1?fields=login" )
          .reply( 200, testHelper.mockResponse );
        users.fetch( 1, { fields: "login" } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );

      it( "accepts fields object", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/users/1?fields=(login%3A!t%2Cname%3A!t)" )
          .reply( 200, testHelper.mockResponse );
        users.fetch( 1, { fields: { login: true, name: true } } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );

      it( "uses POST for very long fields object", done => {
        nock( "http://localhost:4000" )
          .post( "/v2/users/1" )
          .reply( 200, testHelper.mockResponse );
        users.fetch( 1, { fields: veryLongFieldsObject } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );
    } );
  } );

  describe( "me", ( ) => {
    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );

      it( "accepts fields string", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/users/me?fields=login" )
          .reply( 200, testHelper.mockResponse );
        users.me( { fields: "login" } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );

      it( "accepts fields object", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/users/me?fields=(login%3A!t%2Cname%3A!t)" )
          .reply( 200, testHelper.mockResponse );
        users.me( { fields: { login: true, name: true } } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );

      it( "uses POST for very long fields object", done => {
        nock( "http://localhost:4000" )
          .post( "/v2/users/me" )
          .reply( 200, testHelper.mockResponse );
        users.me( { fields: veryLongFieldsObject } ).then( r => {
          expect( r.total_results ).to.eq( 1 );
          expect( r.results[0].id ).to.eq( 1 );
          done( );
        } );
      } );
    } );
  } );

  describe( "mute", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .post( "/users/1/mute" )
        .reply( 200 );
      users.mute( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "unmute", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .delete( "/users/1/mute" )
        .reply( 200 );
      users.unmute( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "block", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .post( "/users/1/block" )
        .reply( 200 );
      users.block( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "unblock", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .delete( "/users/1/block" )
        .reply( 200 );
      users.unblock( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "projects", ( ) => {
    it( "gets /users/:id/projects", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/users/1/projects" )
        .reply( 200, testHelper.mockResponse );
      users.projects( { id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/users/1/projects" );
        done( );
      } );
    } );
  } );

  describe( "notification_counts", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/users/notification_counts" )
        .reply( 200 );
      users.notification_counts( { } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "recent_observation_fields", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/users/recent_observation_fields" )
        .reply( 200 );
      users.recent_observation_fields( { } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .put( "/users/1" )
        .reply( 200 );
      users.update( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update_session", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .put( "/users/update_session" )
        .reply( 200 );
      users.update_session( { } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "resendConfirmation", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:3000" )
        .post( "/users/resend_confirmation" )
        .reply( 200 );
      users.resendConfirmation( { } ).then( ( ) => {
        done( );
      } );
    } );
  } );
} );
