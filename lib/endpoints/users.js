const iNaturalistAPI = require( "../inaturalist_api" );
const Project = require( "../models/project" );
const User = require( "../models/user" );

const users = class users {
  static fetch( ids, params = {} ) {
    return iNaturalistAPI.fetch( "users", ids, params )
      .then( User.typifyResultsResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.upload( "users/:id", params, { ...options, method: "put" } )
      .then( User.typifyInstanceResponse );
  }

  static update_session( params, options ) { // eslint-disable-line camelcase
    return iNaturalistAPI.put( "users/update_session", params, options );
  }

  static me( opts = { } ) {
    const options = { ...opts };
    const params = { };
    if ( options.fields ) {
      params.fields = options.fields;
      delete options.fields;
    }
    options.useAuth = true;
    return iNaturalistAPI.get( "users/me", params, options )
      .then( User.typifyResultsResponse );
  }

  static mute( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.post( "users/:id/mute", params, options );
  }

  static unmute( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.delete( "users/:id/mute", params, options );
  }

  static block( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.post( "users/:id/block", params, options );
  }

  static unblock( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.delete( "users/:id/block", params, options );
  }

  static projects( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.get( "users/:id/projects", params, options )
      .then( Project.typifyResultsResponse );
  }

  static resendConfirmation( params, opts = { } ) {
    const options = { ...opts };
    options.useAuth = true;
    return iNaturalistAPI.post( "users/resend_confirmation", params, options );
  }
};

module.exports = users;
