const iNaturalistAPI = require( "../inaturalist_api" );
const AuthorizedApplication = require( "../models/authorized_application" );

const authorizedApplications = class authorizedApplications {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "authorized_applications", params, { ...opts, useAuth: true } )
      .then( AuthorizedApplication.typifyResultsResponse );
  }

  static delete( params, options ) {
    let endpoint = "oauth/authorized_applications/:id";
    if ( iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match( /\/v\d/ ) ) {
      endpoint = "authorized_applications/:id";
    }
    return iNaturalistAPI.delete( endpoint, params, options );
  }
};

module.exports = authorizedApplications;
