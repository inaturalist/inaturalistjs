const iNaturalistAPI = require( "../inaturalist_api" );
const User = require( "../models/user" );

const users = class users {
  static fetch( ids ) {
    return iNaturalistAPI.fetch( "users", ids )
      .then( User.typifyResultsResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.upload( "users/:id", params, Object.assign( { }, options, { method: "put" } ) )
      .then( User.typifyInstanceResponse );
  }

  static update_session( params, options ) { // eslint-disable-line camelcase
    return iNaturalistAPI.put( "users/update_session", params, options );
  }

  static me( opts = { } ) {
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.get( "users/me", null, options )
      .then( User.typifyResultsResponse );
  }

  static mute( params, opts = { } ) {
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.post( "users/:id/mute", params, options );
  }

  static unmute( params, opts = { } ) {
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.delete( "users/:id/mute", params, options );
  }

  static block( params, opts = { } ) {
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.post( "users/:id/block", params, options );
  }

  static unblock( params, opts = { } ) {
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.delete( "users/:id/unblock", params, options );
  }
};

module.exports = users;
