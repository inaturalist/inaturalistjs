const iNaturalistAPI = require( "../inaturalist_api" );
const Message = require( "../models/message" );

const messages = class messages {
  static create( params, options ) {
    return iNaturalistAPI.post( "messages", params, options )
      .then( Message.typifyInstanceResponse );
  }

  static search( params, options ) {
    const opts = Object.assign( {}, options, {
      useWriteApi: true,
      useAuth: true
    } );
    return iNaturalistAPI.get( "messages", params, opts )
      .then( Message.typifyResultsResponse );
  }

  static fetch( params, options ) {
    const opts = Object.assign( {}, options, {
      useWriteApi: true,
      useAuth: true
    } );
    return iNaturalistAPI.get( "messages/:id", params, opts )
      .then( Message.typifyResultsResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "messages/:id", params, options );
  }

  static unread( params, options ) {
    const opts = Object.assign( {}, options, {
      useWriteApi: true,
      useAuth: true
    } );
    return iNaturalistAPI.get( "messages/count", params, opts );
  }
};

module.exports = messages;
