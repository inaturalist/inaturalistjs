const iNaturalistAPI = require( "../inaturalist_api" );
const Site = require( "../models/site" );

const sites = class sites {
  static fetch( params ) {
    return iNaturalistAPI.get( "sites", params )
      .then( Site.typifyResultsResponse );
  }
};

module.exports = sites;
