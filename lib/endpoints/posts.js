const iNaturalistAPI = require( "../inaturalist_api" );
const Post = require( "../models/post" );

const posts = class posts {
  static search( params, options ) {
    return iNaturalistAPI.get( "posts", params, options )
      .then( Post.typifyArrayResponse );
  }

  static for_user( params, options ) { // eslint-disable-line camelcase
    // v1 just returns an array, but v2 returns the typical response object
    // with response metadata and an atttribute `results` that is an array
    let typifyMethod = Post.typifyArrayResponse;
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      typifyMethod = Post.typifyResultsResponse;
    }
    return iNaturalistAPI.get( "posts/for_user", params, { ...options, useAuth: true } )
      .then( typifyMethod );
  }

  static create( params, options ) {
    return iNaturalistAPI.post( "posts", params, options )
      .then( Post.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.put( "posts/:id", params, options )
      .then( Post.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "posts/:id", params, options );
  }
};

module.exports = posts;
