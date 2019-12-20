const Model = require( "./model" );

const Message = class Message extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Message );
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Message );
  }
};

module.exports = Message;
