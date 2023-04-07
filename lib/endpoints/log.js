const iNaturalistAPI = require( "../inaturalist_api" );

const log = ( params, userJWT, applicationJWT, opts = { } ) => {
  const options = { ...opts };
  if ( !iNaturalistAPI.apiURL || !iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
    throw new Error( "log endpoint is only availble as of API v2" );
  }
  if ( !userJWT ) {
    throw new Error( "userJWT is required" );
  }
  if ( !applicationJWT ) {
    throw new Error( "applicationJWT is required" );
  }
  options.api_token = `${userJWT},${applicationJWT}`;
  options.apiURL = iNaturalistAPI.apiURL; // force the host to be the Node API
  let newParams = params;

  // Set params if an Error object was passed in
  if ( params instanceof Error ) {
    const pieces = params.message.split( /^\s+at /m );
    newParams = {
      level: options.level || "error",
      message: options.message || pieces[0].trim( ),
      error_type: params.constructor.name,
      context: options.context
    };
    if ( pieces.length > 1 ) {
      newParams.backtrace = pieces.slice( 1 ).map( piece => piece.trim( ) ).join( "\n" );
    }
  }
  return iNaturalistAPI.post( "log", newParams, options );
};

module.exports = log;
