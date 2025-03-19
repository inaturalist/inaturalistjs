const iNaturalistAPI = require( "../inaturalist_api" );
const Announcement = require( "../models/announcement" );

const announcements = class announcements {
  static search( params, options ) {
    const opts = {
      ...options,
      useWriteApi: true,
      useAuth: true
    };
    return iNaturalistAPI.get( "announcements/active", params, opts )
      .then( Announcement.typifyResultsResponse );
  }

  static dismiss( params, options ) {
    return iNaturalistAPI.put( "announcements/:id/dismiss", params, options );
  }
};

module.exports = announcements;
