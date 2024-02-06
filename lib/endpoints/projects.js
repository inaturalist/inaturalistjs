const iNaturalistAPI = require( "../inaturalist_api" );
const Project = require( "../models/project" );

const projects = class projects {
  static fetch( ids, params ) {
    return iNaturalistAPI.fetch( "projects", ids, params )
      .then( Project.typifyResultsResponse );
  }

  static search( params, options ) {
    return iNaturalistAPI.get( "projects", params, options )
      .then( Project.typifyResultsResponse );
  }

  static autocomplete( params ) {
    return iNaturalistAPI.get( "projects/autocomplete", params )
      .then( Project.typifyResultsResponse );
  }

  static create( params, options ) {
    return iNaturalistAPI.upload( "projects", params, options )
      .then( Project.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI
      .upload( "projects/:id", params, { ...options, method: "put" } )
      .then( Project.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "projects/:id", params, options );
  }

  static join( params, options ) {
    let endpoint = "projects/:id/join";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "projects/:id/membership";
    }
    return iNaturalistAPI.post( endpoint, params, options );
  }

  static leave( params, options ) {
    let endpoint = "projects/:id/leave";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "projects/:id/membership";
    }
    return iNaturalistAPI.delete( endpoint, params, options );
  }

  static add( params, options ) {
    return iNaturalistAPI.post( "projects/:id/add", params, options );
  }

  static remove( params, options ) {
    return iNaturalistAPI.delete( "projects/:id/remove", params, options );
  }

  static posts( params, options ) {
    return iNaturalistAPI.get( "projects/:id/posts", params, options );
  }

  static subscribe( params, options ) {
    return iNaturalistAPI.post( "subscriptions/Project/:id/subscribe", params, options );
  }

  static subscriptions( params, options ) {
    return iNaturalistAPI.get(
      "projects/:id/subscriptions",
      params,
      iNaturalistAPI.optionsUseAuth( options )
    );
  }

  static followers( params, options ) {
    return iNaturalistAPI.get( "projects/:id/followers", params, options );
  }

  static members( params, options ) {
    return iNaturalistAPI.get( "projects/:id/members", params, options );
  }

  static membership( params, options ) {
    return iNaturalistAPI.get(
      "projects/:id/membership",
      params,
      iNaturalistAPI.optionsUseAuth( options )
    );
  }

  static feature( params, options ) {
    return iNaturalistAPI.put( "projects/:id/feature", params, options );
  }

  static unfeature( params, options ) {
    return iNaturalistAPI.put( "projects/:id/unfeature", params, options );
  }
};

module.exports = projects;
