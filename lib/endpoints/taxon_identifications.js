const iNaturalistAPI = require( "../inaturalist_api" );
const TaxonIdentification = require( "../models/taxon_identification" );

const taxonIdentifications = class taxonIdentifications {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "taxon_identifications", params, { ...opts, useAuth: true } )
      .then( TaxonIdentification.typifyResultsResponse );
  }
};

module.exports = taxonIdentifications;
