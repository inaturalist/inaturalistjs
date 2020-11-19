const iNaturalistAPI = require( "../inaturalist_api" );
const Sites = require( "../models/site" );

const sites = class sites {
  static fetch( params ) {
    return iNaturalistAPI.get( "sites", params )
      .then( Sites.typifyResultsResponse );
  }
};

module.exports = sites;
