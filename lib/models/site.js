const Model = require( "./model" );

const Site = class Site extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Site );
  }
};

module.exports = Site;
