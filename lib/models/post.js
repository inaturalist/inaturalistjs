const Model = require( "./model" );

const Post = class Post extends Model {
  static typifyArrayResponse( response ) {
    return super.typifyArrayResponse( response, Post );
  }

  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Post );
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Post );
  }
};

module.exports = Post;
