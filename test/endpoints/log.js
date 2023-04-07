const { expect } = require( "chai" );
const nock = require( "nock" );
const url = require( "url" );
const log = require( "../../lib/endpoints/log" );
const iNaturalistAPI = require( "../../lib/inaturalist_api" );
const { v1ToV2, v2ToV1 } = require( "../../lib/test_helper" );

const USER_JWT = "user-jwt";
const APPLICATION_JWT = "application-jwt";
const LOG_EVENT = {
  context: "log.js",
  message: "something happened",
  error_type: "Error",
  level: "error",
  backtrace: "something\nhappened"
};

describe( "log", ( ) => {
  beforeEach( v1ToV2 );
  afterEach( v2ToV1 );
  afterEach( ( ) => nock.cleanAll( ) );

  it( "should construct a POST body", done => {
    const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
    nock( [protocol, host].join( "//" ) )
      .post( "/v2/log", LOG_EVENT ).reply( 204 );
    log( LOG_EVENT, USER_JWT, APPLICATION_JWT ).then( done ).catch( e => done( e ) );
  } );

  it( "throws an error without a user JWT", done => {
    const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
    nock( [protocol, host].join( "//" ) )
      .post( "/v2/log", LOG_EVENT ).reply( 204 );
    expect( ( ) => log( LOG_EVENT, null, APPLICATION_JWT ) ).to.throw( "userJWT is required" );
    done( );
  } );

  it( "throws an error without an application JWT", done => {
    const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
    nock( [protocol, host].join( "//" ) )
      .post( "/v2/log", LOG_EVENT ).reply( 204 );
    expect( ( ) => log( LOG_EVENT, USER_JWT, null ) ).to.throw( "applicationJWT is required" );
    done( );
  } );

  it( "submits a comma-delimited combined JWT", done => {
    const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
    nock( [protocol, host].join( "//" ), {
      reqheaders: { authorization: `${USER_JWT},${APPLICATION_JWT}` }
    } )
      .post( "/v2/log", LOG_EVENT ).reply( 204 );
    log( LOG_EVENT, USER_JWT, APPLICATION_JWT )
      .then( done ).catch( e => done( e ) );
  } );

  describe( "error parsing", ( ) => {
    const error = new Error( `Something went terribly wrong:
      at method1 (path/to/file1.js:1:2)
      at method2 (path/to/file2.js:1:2)
    ` );

    it( "autopopulates params when given an Error", done => {
      const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
      nock( [protocol, host].join( "//" ), {
        reqheaders: { authorization: `${USER_JWT},${APPLICATION_JWT}` }
      } )
        .post( "/v2/log", {
          message: /Something went terribly wrong/,
          error_type: "Error",
          level: "error",
          backtrace: /method1/
        } ).reply( 204 );
      log( error, USER_JWT, APPLICATION_JWT ).then( done ).catch( e => done( e ) );
    } );

    it( "allows override of message in options", done => {
      const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
      nock( [protocol, host].join( "//" ), {
        reqheaders: { authorization: `${USER_JWT},${APPLICATION_JWT}` }
      } )
        .post( "/v2/log", {
          message: "foo",
          error_type: "Error",
          level: "error",
          backtrace: /method1/
        } ).reply( 204 );
      log( error, USER_JWT, APPLICATION_JWT, { message: "foo" } ).then( done ).catch( e => done( e ) );
    } );

    it( "allows context in options", done => {
      const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
      nock( [protocol, host].join( "//" ), {
        reqheaders: { authorization: `${USER_JWT},${APPLICATION_JWT}` }
      } )
        .post( "/v2/log", {
          message: /Something went terribly wrong/,
          error_type: "Error",
          level: "error",
          backtrace: /method1/,
          context: "foo"
        } ).reply( 204 );
      log( error, USER_JWT, APPLICATION_JWT, { context: "foo" } ).then( done ).catch( e => done( e ) );
    } );

    it( "should set error_type for an extension of Error", done => {
      class CustomError extends Error {}
      const customError = new CustomError( error.message );
      const { host, protocol } = url.parse( iNaturalistAPI.apiURL, true );
      nock( [protocol, host].join( "//" ), {
        reqheaders: { authorization: `${USER_JWT},${APPLICATION_JWT}` }
      } )
        .post( "/v2/log", {
          message: /Something went terribly wrong/,
          error_type: "CustomError",
          level: "error",
          backtrace: /method1/
        } ).reply( 204 );
      log( customError, USER_JWT, APPLICATION_JWT ).then( done ).catch( e => done( e ) );
    } );
  } );
} );
