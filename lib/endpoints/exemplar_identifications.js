const iNaturalistAPI = require( "../inaturalist_api" );
const ExemplarIdentification = require( "../models/exemplar_identification" );

const exemplarIdentifications = class exemplarIdentifications {
  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "exemplar_identifications", params, { ...opts, useAuth: true } )
      .then( ExemplarIdentification.typifyResultsResponse );
  }

  static vote( params, options ) {
    let endpoint = "votes/vote/exemplar_identification/:id";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "exemplar_identifications/:id/vote";
    }
    return iNaturalistAPI.post( endpoint, params, options );
  }

  static unvote( params, options ) {
    let endpoint = "votes/unvote/exemplar_identification/:id";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "exemplar_identifications/:id/vote";
    }
    return iNaturalistAPI.delete( endpoint, params, options );
  }
};

module.exports = exemplarIdentifications;
