const iNaturalistAPI = require( "../inaturalist_api" );

const observationPhotos = class observationPhotos {
  static create( params, options ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) && !params.file ) {
      // For API v2, observation_photos creation endpoint shouldn't receive a
      // 'file' input param - however, if we use the 'upload' method, it will
      // send the POST request as a multipart request, which will
      // make the server require the file param.
      return iNaturalistAPI.post( "observation_photos", params, options );
    }

    return iNaturalistAPI.upload( "observation_photos", params, options );
  }

  static update( params, opts = { } ) {
    const options = { ...opts };

    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      return iNaturalistAPI.put( "observation_photos/:id", params, options );
    }

    options.method = "PUT";
    return iNaturalistAPI.upload( "observation_photos/:id", params, options );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "observation_photos/:id", params, options );
  }
};

module.exports = observationPhotos;
