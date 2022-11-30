const iNaturalistAPI = require( "../inaturalist_api" );
const Place = require( "../models/place" );

const places = class places {
  static fetch( ids, params ) {
    return iNaturalistAPI.fetch( "places", ids, params )
      .then( Place.typifyResultsResponse );
  }

  static autocomplete( params ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      throw ( new Error( "API v2 does not support places.autocomplete. Use places.search instead." ) );
    }
    return iNaturalistAPI.get( "places/autocomplete", params )
      .then( Place.typifyResultsResponse );
  }

  static search( params ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v1/ ) ) {
      throw ( new Error( "API v1 does not support places.search. Use places.autocomplete instead." ) );
    }
    return iNaturalistAPI.get( "places", params )
      .then( Place.typifyResultsResponse );
  }

  static containing( params ) {
    return iNaturalistAPI.get( "places/containing", params )
      .then( Place.typifyResultsResponse );
  }
};

module.exports = places;
