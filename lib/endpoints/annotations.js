const iNaturalistAPI = require( "../inaturalist_api" );
const Annotation = require( "../models/annotation" );

const annotations = class annotations {
  static create( params, options ) {
    return iNaturalistAPI.post( "annotations", params, options )
      .then( Annotation.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "annotations/:id", params, options );
  }

  static vote( params, options ) {
    let endpoint = "votes/vote/annotation/:id";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "annotations/:id/vote";
    }
    return iNaturalistAPI.post( endpoint, params, options )
      .then( Annotation.typifyInstanceResponse );
  }

  static unvote( params, options ) {
    let endpoint = "votes/unvote/annotation/:id";
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      endpoint = "annotations/:id/unvote";
    }
    return iNaturalistAPI.delete( endpoint, params, options );
  }
};

module.exports = annotations;
