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

  static autocomplete( params, opts = { } ) {
    return iNaturalistAPI.get( "taxa/autocomplete", params, { ...opts, useAuth: true } )
      .then( Taxon.typifyResultsResponse );
  }

  static suggest( params, opts = { } ) {
    return iNaturalistAPI.get( "taxa/suggest", params, { ...opts, useAuth: true } ).then( response => {
      response.results = response.results.map( r => (
        Object.assign( { }, r, { taxon: new Taxon( r.taxon ) } )
      ) );
      return response;
    } );
  }

  static lifelist_metadata( params, opts = { } ) { // eslint-disable-line camelcase
    return iNaturalistAPI.get( "taxa/lifelist_metadata", params, { ...opts, useAuth: true } )
      .then( Taxon.typifyResultsResponse );
  }

  static wanted( params, opts = { } ) {
    return iNaturalistAPI.get( "taxa/:id/wanted", params, { ...opts, useAuth: true } )
      .then( response => Taxon.typifyResultsResponse( response ) );
  }
};

module.exports = taxa;
