const iNaturalistAPI = require( "../inaturalist_api" );

const featureFlags = class featureFlags {
  static get( params, options ) {
    return iNaturalistAPI.get( "feature_flags", params, { ...options, useAuth: true } );
  }
};

module.exports = featureFlags;
