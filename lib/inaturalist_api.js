// cross-fetch wraps https://github.com/github/fetch, which doesn't seem to work
// quite right in React Native (see https://github.com/github/fetch/issues/601
// and https://github.com/lquixada/cross-fetch/issues/2). Conditional requires
// like this seem to work, though they do result in unnecessarily large files
// for React native

let localFetch;
if ( typeof ( fetch ) !== "undefined" ) {
  localFetch = fetch;
} else {
  localFetch = require( "cross-fetch" ); // eslint-disable-line global-require
}
let LocalFormData;
if ( typeof ( FormData ) !== "undefined" ) {
  LocalFormData = FormData;
} else {
  LocalFormData = require( "form-data" ); // eslint-disable-line global-require, import/no-extraneous-dependencies
}

const querystring = require( "querystring" );
const util = require( "./util" );
const INaturalistAPIResponse = require( "./models/inaturalist_api_response" );

const iNaturalistAPI = class iNaturalistAPI {
  static fetch( route, ids, params, options ) {
    let fetchIDs = ids;
    if ( !Array.isArray( fetchIDs ) ) { fetchIDs = [fetchIDs]; }
    const apiToken = iNaturalistAPI.apiToken( options );
    const headers = apiToken ? { Authorization: apiToken } : { };
    headers["Content-Type"] = "application/json";
    if ( params && params.fields && typeof ( params.fields ) === "object" ) {
      headers.Accept = "application/json";
      headers["X-HTTP-Method-Override"] = "GET";
      return localFetch(
        `${iNaturalistAPI.apiURL}/${route}/${fetchIDs.join( "," )}`,
        {
          method: "post",
          headers,
          body: JSON.stringify( params )
        }
      )
        .then( iNaturalistAPI.thenText )
        .then( iNaturalistAPI.thenJson )
        .then( iNaturalistAPI.thenWrap );
    }
    const query = params ? `?${querystring.stringify( params )}` : "";
    return localFetch( `${iNaturalistAPI.apiURL}`
        + `/${route}/${fetchIDs.join( "," )}${query}`, { headers } )
      .then( iNaturalistAPI.thenText )
      .then( iNaturalistAPI.thenJson )
      .then( iNaturalistAPI.thenWrap );
  }

  // Note, this generally assumes that all GET requests go to the Node API. If
  // you want to GET something from the Rails API, call this with
  // useWriteApi: true
  static get( route, params, opts ) {
    const options = Object.assign( { }, opts || { } );
    const interpolated = iNaturalistAPI.interpolateRouteParams( route, params );
    if ( interpolated.err ) { return interpolated.err; }
    const thisRoute = interpolated.route;
    const apiToken = options.useAuth ? iNaturalistAPI.apiToken( options ) : null;
    const headers = {
      Accept: "application/json",
      // DO NOT OMIT! Without this, fetch in React Native on Android will not
      // even execute the request
      "Content-Type": "application/json",
      "X-Via": "inaturalistjs"
    };
    if ( apiToken ) {
      headers.Authorization = apiToken;
    }
    const host = options.useWriteApi ? iNaturalistAPI.writeApiURL : iNaturalistAPI.apiURL;
    let url = `${host}/${thisRoute}`;
    if (
      interpolated.remainingParams
      && Object.keys( interpolated.remainingParams ).length > 0
    ) {
      url += `?${querystring.stringify( interpolated.remainingParams )}`;
    }
    if ( params && params.fields && typeof ( params.fields ) === "object" ) {
      headers["X-HTTP-Method-Override"] = "GET";
      headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE, HEAD";
      return localFetch( url, {
        method: "post",
        headers,
        body: JSON.stringify( params )
      } )
        .then( iNaturalistAPI.thenText )
        .then( iNaturalistAPI.thenJson )
        .then( iNaturalistAPI.thenWrap );
    }
    return localFetch( url, { headers } )
      .then( iNaturalistAPI.thenText )
      .then( iNaturalistAPI.thenJson )
      .then( iNaturalistAPI.thenWrap );
  }

  static post( route, p, opts ) {
    const options = Object.assign( { }, opts || { } );
    let params = Object.assign( { }, p || { } );
    // interpolate path params, e.g. /:id => /1
    const interpolated = iNaturalistAPI.interpolateRouteParams( route, params );
    if ( interpolated.err ) { return interpolated.err; }
    const thisRoute = interpolated.route;
    // set up request headers
    const headers = {
      Accept: "application/json",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, HEAD",
      "X-Via": "inaturalistjs"
    };
    if ( options.user_agent ) {
      headers["user-agent"] = options.user_agent;
    }
    if ( options.remote_ip ) {
      headers["x-forwarded-for"] = options.remote_ip;
    }
    // set up authentication
    const csrf = iNaturalistAPI.csrf( );
    const apiToken = iNaturalistAPI.apiToken( options );
    if ( apiToken ) {
      headers.Authorization = apiToken;
    } else if ( csrf ) {
      params[csrf.param] = csrf.token;
    }
    // get the right host to send requests
    const host = iNaturalistAPI.methodHostPrefix( options );
    // make the request
    let body;
    if ( options.upload ) {
      body = new LocalFormData( );
      // Before params get "flattened" extract the fields and encode them as a
      // single JSON string, which the server can handle
      const { fields } = interpolated.remainingParams;
      if ( fields ) {
        delete interpolated.remainingParams.fields;
        body.append( "fields", JSON.stringify( fields ) );
      }
      // multipart requests reference all nested parameter names as strings
      // so flatten arrays into "arr[0]" and objects into "obj[prop]"
      params = iNaturalistAPI.flattenMultipartParams( interpolated.remainingParams );
      Object.keys( params ).forEach( k => {
        // FormData params can include options like file upload sizes
        if ( params[k] && params[k].type === "custom" && params[k].value ) {
          body.append( k, params[k].value, params[k].options );
        } else {
          body.append( k, ( typeof params[k] === "boolean" ) ? params[k].toString( ) : params[k] );
        }
      } );
    } else {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify( interpolated.remainingParams );
    }
    const fetchOpts = {
      method: ( options.method || "post" ),
      credentials: ( options.same_origin ? "same-origin" : undefined ),
      headers
    };
    if ( options.method !== "head" ) {
      fetchOpts.body = body;
    }
    let query = "";
    // Rails, at least, can read params from DELETE request URLs, but
    // cannot read post data. So append any params to the URL
    if ( options.method === "delete" && Object.keys( interpolated.remainingParams ).length > 0 ) {
      query = `?${querystring.stringify( interpolated.remainingParams )}`;
    }
    const url = `${host}/${thisRoute}${query}`;
    return localFetch( url, fetchOpts )
      .then( iNaturalistAPI.thenText )
      .then( iNaturalistAPI.thenJson );
  }

  // a variant of post using the http PUT method
  static head( route, params, opts = { } ) {
    const options = Object.assign( { }, opts, { method: "head" } );
    return iNaturalistAPI.post( route, params, options );
  }

  // a variant of post using the http PUT method
  static put( route, params, opts = { } ) {
    const options = Object.assign( { }, opts, { method: "put" } );
    return iNaturalistAPI.post( route, params, options );
  }

  // a variant of post using the http DELETE method
  static delete( route, params, opts = { } ) {
    const options = Object.assign( { }, opts, { method: "delete" } );
    return iNaturalistAPI.post( route, params, options );
  }

  static upload( route, params, opts = { } ) {
    // uploads can be POST or PUT
    const method = opts.method || "post";
    const options = Object.assign( { }, opts || { }, { method, upload: true } );
    return iNaturalistAPI.post( route, params, options );
  }

  static methodHostPrefix( opts ) {
    if ( opts.same_origin ) { return ""; }
    if ( opts.apiURL ) { return opts.apiURL; }
    return `${iNaturalistAPI.writeApiURL}`;
  }

  static csrf( ) {
    const param = util.browserMetaTagContent( "csrf-param" );
    const token = util.browserMetaTagContent( "csrf-token" );
    return ( param && token ) ? { param, token } : null;
  }

  static apiToken( opts = { } ) {
    const token = util.browserMetaTagContent( "inaturalist-api-token" );
    if ( token ) { return token; }
    return opts.api_token;
  }

  static thenText( response ) {
    // return non-successes before parsing text, so the client can parse it
    if ( response.status < 200 || response.status >= 300 ) {
      const error = new Error( response.statusText );
      error.response = response;
      throw error;
    }
    // not using response.json( ) as there may be no JSON
    return response.text( ).then( text => (
      ( response.status >= 200 && response.status < 300 ) ? text : null
    ) );
  }

  static thenJson( text ) {
    if ( text ) { return JSON.parse( text ); }
    return text;
  }

  static thenWrap( response ) {
    if ( Array.isArray( response ) ) { return response; }
    return new INaturalistAPIResponse( response );
  }

  // flatten nested objects like arrays into "arr[0]" and objects into "obj[prop]"
  static flattenMultipartParams( params, keyPrefix ) {
    if ( params === null ) { return params; }
    if ( typeof params === "object" ) {
      if ( !params.constructor || params.constructor.name === "Object" ) {
        if ( params.type === "custom" ) { return { [keyPrefix]: params }; }
        const flattenedParams = { };
        Object.keys( params ).forEach( k => {
          const newPrefix = keyPrefix ? `${keyPrefix}[${k}]` : k;
          Object.assign( flattenedParams,
            iNaturalistAPI.flattenMultipartParams( params[k], newPrefix ) );
        } );
        return flattenedParams;
      }
      if ( params.constructor.name === "Array" ) {
        const flattenedParams = { };
        params.forEach( ( value, index ) => {
          const newPrefix = `${keyPrefix}[${index}]`;
          Object.assign( flattenedParams,
            iNaturalistAPI.flattenMultipartParams( params[index], newPrefix ) );
        } );
        return flattenedParams;
      }
    }
    return { [keyPrefix]: params };
  }

  static setConfig( config = { } ) {
    const legacyEnv = iNaturalistAPI.legacyEnvConfig( config );
    const envURLConfig = legacyEnv.apiURL
      || util.browserMetaTagContent( "config:inaturalist_api_url" )
      || util.nodeENV( "API_URL" );
    const envWriteURLConfig = legacyEnv.writeApiURL
      || util.browserMetaTagContent( "config:inaturalist_write_api_url" )
      || util.nodeENV( "WRITE_API_URL" );
    iNaturalistAPI.apiURL = config.apiURL
      || envURLConfig
      || "https://api.inaturalist.org/v1";
    iNaturalistAPI.writeApiURL = config.writeApiURL
      || envWriteURLConfig
      || envURLConfig
      || config.apiURL
      || "https://www.inaturalist.org";
  }

  static legacyEnvConfig( config ) {
    const oldVariables = {
      envHostConfig: config.apiHost
        || util.browserMetaTagContent( "config:inaturalist_api_host" )
        || util.nodeENV( "API_HOST" ),
      envWriteHostConfig: config.writeApiHost
        || util.browserMetaTagContent( "config:inaturalist_write_api_host" )
        || util.nodeENV( "WRITE_API_HOST" ),
      envApiHostSSL: config.apiHostSSL || ( (
        util.browserMetaTagContent( "config:inaturalist_api_host_ssl" )
        || util.nodeENV( "API_HOST_SSL" )
      ) === "true" ),
      envWriteHostSSL: config.writeApiHostSSL || ( (
        util.browserMetaTagContent( "config:inaturalist_write_host_ssl" )
        || util.nodeENV( "WRITE_HOST_SSL" )
      ) === "true" )
    };
    const updatedVariables = { };
    if ( oldVariables.envHostConfig ) {
      updatedVariables.apiURL = ( oldVariables.envApiHostSSL ? "https://" : "http://" )
        + oldVariables.envHostConfig;
    }
    if ( oldVariables.envWriteHostConfig ) {
      updatedVariables.writeApiURL = ( oldVariables.envWriteHostSSL ? "https://" : "http://" )
        + oldVariables.envWriteHostConfig;
    }
    return updatedVariables;
  }

  static interpolateRouteParams( route, params ) {
    let err;
    let interpolatedRoute = route;
    const remainingParams = Object.assign( { }, params );
    const interpolatedParams = {};
    const matches = route.match( /(:[a-z]+)(?=\/|$)/g );
    if ( matches ) {
      matches.forEach( sym => {
        if ( err ) { return; }
        const v = sym.substring( 1 );
        if ( remainingParams[v] ) {
          interpolatedRoute = interpolatedRoute.replace( sym, encodeURI( remainingParams[v] ) );
          interpolatedParams[sym] = encodeURI( remainingParams[v] );
          delete remainingParams[v];
        } else if ( sym === ":id" && remainingParams.uuid ) {
          // If a UUID was provided but not an ID, sub that in instead
          interpolatedRoute = interpolatedRoute.replace( sym, encodeURI( remainingParams.uuid ) );
          interpolatedParams[sym] = encodeURI( remainingParams.uuid );
          delete remainingParams.uuid;
        } else {
          err = new Promise( ( res, rej ) => {
            rej( new Error( `${v} required` ) );
          } );
        }
      } );
    }
    return {
      route: interpolatedRoute,
      interpolatedParams,
      remainingParams,
      err
    };
  }

  static optionsUseAuth( options ) {
    return Object.assign( { }, options, { useAuth: true } );
  }
};

iNaturalistAPI.setConfig( );

module.exports = iNaturalistAPI;
