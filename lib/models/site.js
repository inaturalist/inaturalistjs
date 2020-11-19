const Model = require( "./model" );

const Site = class Site extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Site );
  }

  static typifyResultsResponse( response ) {
    if ( response.results ) {
      response.results = response.results.map( r => Site.typifyInstanceResponse( r ) );
    }
    return response;
  }
};

module.exports = Site;
