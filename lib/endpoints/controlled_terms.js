const iNaturalistAPI = require( "../inaturalist_api" );
const ControlledTerm = require( "../models/controlled_term" );

const typifyResponse = response => {
  const typifiedResponse = ControlledTerm.typifyResultsResponse( response );
  for ( let i = 0; i < typifiedResponse.results.length; i += 1 ) {
    if ( typifiedResponse.results[i] && !typifiedResponse.results[i].values ) {
      typifiedResponse.results[i].values = typifiedResponse.results[i].values.map(
        v => ( new ControlledTerm( v ) )
      );
    }
  }
  return typifiedResponse;
};

const controlledTerms = class controlledTerms { // eslint-disable-line camelcase
  static for_taxon( params ) { // eslint-disable-line camelcase
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      const taxonIds = params.taxon_id.toString( ).split( "," ).join( "," );
      const newParams = Object.assign( {}, params );
      delete newParams.taxon_id;
      return iNaturalistAPI.get( `controlled_terms/for_taxon/${taxonIds}`, newParams ).then( typifyResponse );
    }
    return iNaturalistAPI.get( "controlled_terms/for_taxon", params ).then( typifyResponse );
  }

  static search( params ) {
    return iNaturalistAPI.get( "controlled_terms", params, { } ).then( typifyResponse );
  }
};

module.exports = controlledTerms; // eslint-disable-line camelcase
