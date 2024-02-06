const iNaturalistAPI = require( "../inaturalist_api" );
const ControlledTerm = require( "../models/controlled_term" );

const typifyResponse = response => {
  const typifiedResponse = ControlledTerm.typifyResultsResponse( response );
  if ( !typifiedResponse.results ) {
    return typifiedResponse;
  }

  for ( let i = 0; i < typifiedResponse.results.length; i += 1 ) {
    if ( typifiedResponse.results[i] && typifiedResponse.results[i].values ) {
      typifiedResponse.results[i].values = typifiedResponse.results[i].values.map(
        v => ( new ControlledTerm( v ) )
      );
    }
  }
  return typifiedResponse;
};

const controlledTerms = class controlledTerms { // eslint-disable-line camelcase
  static for_taxon( params, opts = { } ) { // eslint-disable-line camelcase
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      const taxonIds = params.taxon_id.toString( ).split( "," ).join( "," );
      const newParams = { ...params };
      delete newParams.taxon_id;
      return iNaturalistAPI.get( `controlled_terms/for_taxon/${taxonIds}`, newParams, opts ).then( typifyResponse );
    }
    return iNaturalistAPI.get( "controlled_terms/for_taxon", params, opts ).then( typifyResponse );
  }

  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "controlled_terms", params, opts ).then( typifyResponse );
  }
};

module.exports = controlledTerms; // eslint-disable-line camelcase
