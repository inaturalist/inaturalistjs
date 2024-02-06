const Model = require( "./model" );

const AuthorizedApplication = class AuthorizedApplication extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, AuthorizedApplication );
  }
};

module.exports = AuthorizedApplication;
