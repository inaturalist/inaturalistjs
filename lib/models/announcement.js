const Model = require( "./model" );

const Announcement = class Announcement extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Announcement );
  }
};

module.exports = Announcement;
