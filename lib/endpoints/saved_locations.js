const iNaturalistAPI = require( "../inaturalist_api" );
const SavedLocation = require( "../models/saved_location" );

const savedLocations = class savedLocations {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "saved_locations", params, { ...opts, useAuth: true } )
      .then( SavedLocation.typifyResultsResponse );
  }

  static create( params, options ) {
    return iNaturalistAPI.post( "saved_locations", params, options )
      .then( SavedLocation.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "saved_locations/:id", params, options );
  }
};

module.exports = savedLocations;
