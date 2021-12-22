const _ = require( "lodash" );

const Model = class Model {
  constructor( attrs ) {
    const newAttrs = Object.assign( {}, attrs );
    // Ensure both camelcase and snakecase versions of attributes are
    // available, so these objects look javascript-y but remain somewhat
    // backwards compatible
    _.forEach( attrs, ( v, k ) => {
      newAttrs[_.camelCase( k )] = v;
      newAttrs[_.snakeCase( k )] = v;
    } );
    Object.assign( this, newAttrs );
  }

  static typifyInstanceResponse( response, Type ) {
    return new Type( response );
  }

  static typifyArrayResponse( response, Type ) {
    const arr = [];
    Object.keys( response ).forEach( k => {
      arr.push( new Type( response[k] ) );
    } );
    return arr;
  }

  static typifyResultsResponse( response, Type ) {
    if ( Type && response.results ) {
      response.results = response.results.map( r => new Type( r ) );
    }
    return response;
  }
};

module.exports = Model;
