const iNaturalistAPI = require( "../inaturalist_api" );

const translations = class translations {
  static locales( params = { }, options = { } ) {
    return iNaturalistAPI.get( "translations/locales", params, options );
  }
};

module.exports = translations;
