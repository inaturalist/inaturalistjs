const iNaturalistAPI = require( "../inaturalist_api" );
const Relationship = require( "../models/relationship" );

const relationships = class relationships {
  static create( params, options ) {
    return iNaturalistAPI.post( "relationships", params, options )
      .then( Relationship.typifyInstanceResponse );
  }

  static search( params, options ) {
    let useWriteApi = false;
    if ( iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match( /\/v\d/ ) ) {
      useWriteApi = true;
    }
    const opts = {
      ...options,
      useWriteApi,
      useAuth: true
    };
    return iNaturalistAPI.get( "relationships", params, opts )
      .then( Relationship.typifyResultsResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.put( "relationships/:id", params, options );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "relationships/:id", params, options );
  }
};

module.exports = relationships;
