const iNaturalistAPI = require( "../inaturalist_api" );

const buildInfo = class buildInfo {
  static get( params, options ) {
    return iNaturalistAPI.get( "build_info", params, options );
  }
};

module.exports = buildInfo;
