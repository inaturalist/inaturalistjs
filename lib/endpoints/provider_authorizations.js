const iNaturalistAPI = require( "../inaturalist_api" );
const ProviderAuthorization = require( "../models/provider_authorization" );

const ProviderAuthorizations = class ProviderAuthorizations {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "provider_authorizations", params, { ...opts, useAuth: true } )
      .then( ProviderAuthorization.typifyResultsResponse );
  }

  static delete( params, options ) {
    let endpoint = "provider_authorizations/:id";
    if ( iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match( /\/v\d/ ) ) {
      endpoint = "provider_authorizations/:id";
    }
    return iNaturalistAPI.delete( endpoint, params, options );
  }
};

module.exports = ProviderAuthorizations;
