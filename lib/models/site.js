const Model = require( "./model" );

const Site = class Site extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Site );
  }
};

module.exports = Site;
