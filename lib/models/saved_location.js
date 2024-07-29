const Model = require( "./model" );

const SavedLocation = class SavedLocation extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, SavedLocation );
  }

  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, SavedLocation );
  }
};

module.exports = SavedLocation;
