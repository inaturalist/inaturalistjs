const iNaturalistAPI = require( "../inaturalist_api" );
const Taxon = require( "../models/taxon" );

const taxa = class taxa {
  static fetch( ids, params ) {
    return iNaturalistAPI.fetch( "taxa", ids, params )
      .then( Taxon.typifyResultsResponse );
  }

  static search( params ) {
    return iNaturalistAPI.get( "taxa", params, params )
      .then( Taxon.typifyResultsResponse );
  }

  static autocomplete( params ) {
    return iNaturalistAPI.get( "taxa/autocomplete", params, { useAuth: true } )
      .then( Taxon.typifyResultsResponse );
  }

  static suggest( params ) {
    return iNaturalistAPI.get( "taxa/suggest", params, { useAuth: true } ).then( response => {
      response.results = response.results.map( r => (
        Object.assign( { }, r, { taxon: new Taxon( r.taxon ) } )
      ) );
      return response;
    } );
  }

  static lifelist_metadata( params ) { // eslint-disable-line camelcase
    return iNaturalistAPI.get( "taxa/lifelist_metadata", params, params )
      .then( Taxon.typifyResultsResponse );
  }

  static wanted( params ) {
    return iNaturalistAPI.get( "taxa/:id/wanted", params, { useAuth: true } )
      .then( response => Taxon.typifyResultsResponse( response ) );
  }
};

module.exports = taxa;
