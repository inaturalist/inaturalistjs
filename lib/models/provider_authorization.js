const Model = require( "./model" );

const ProviderAuthorization = class ProviderAuthorization extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, ProviderAuthorization );
  }
};

module.exports = ProviderAuthorization;
