const iNaturalistAPI = require( "../inaturalist_api" );
const Announcement = require( "../models/announcement" );

const announcements = class announcements {
  static search( params, options ) {
    let endpoint = "announcements/active";
    if ( iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match( /\/v\d/ ) ) {
      endpoint = "announcements";
    }
    const opts = {
      ...options,
      useWriteApi: true,
      useAuth: true
    };
    return iNaturalistAPI.get( endpoint, params, opts )
      .then( Announcement.typifyResultsResponse );
  }

  static dismiss( params, options ) {
    return iNaturalistAPI.put( "announcements/:id/dismiss", params, options );
  }
};

module.exports = announcements;
