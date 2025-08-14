const iNaturalistAPI = require( "../inaturalist_api" );
const ProviderAuthorization = require( "../models/provider_authorization" );

const ProviderAuthorizations = class ProviderAuthorizations {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "provider_authorizations", params, { ...opts, useAuth: true } )
      .then( ProviderAuthorization.typifyResultsResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "provider_authorizations/:id", params, options );
  }
};

module.exports = ProviderAuthorizations;
