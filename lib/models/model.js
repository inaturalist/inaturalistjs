const Model = class Model {
  constructor( attrs ) {
    Object.assign( this, attrs );
  }

  static typifyInstanceResponse( response, Type ) {
    return new Type( response );
  }

  static typifyArrayResponse( response, Type ) {
    response.forEach( ( item, index ) => {
      response[index] = new Type( item );
    } );
    return response;
  }

  static typifyResultsResponse( response, Type ) {
    if ( Type && response.results ) {
      response.results = response.results.map( r => new Type( r ) );
    }
    return response;
  }
};

module.exports = Model;
