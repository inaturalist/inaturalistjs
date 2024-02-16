const iNaturalistAPI = require( "../inaturalist_api" );
const Comment = require( "../models/comment" );

const comments = class comments {
  static create( params, options ) {
    return iNaturalistAPI.post( "comments", params, options )
      .then( Comment.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.put( "comments/:id", params, options )
      .then( Comment.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "comments/:id", params, options );
  }

  static translate( params, options ) {
    return iNaturalistAPI.post( "comments/translation", params, options );
  }
};

module.exports = comments;
