const iNaturalistAPI = require( "../inaturalist_api" );
const Taxon = require( "../models/taxon" );

const computervision = class computervision {
  static score_image( params, opts = { } ) { // eslint-disable-line camelcase
    const options = { ...opts };
    options.useAuth = true;
    options.apiURL = iNaturalistAPI.apiURL; // force the host to be the Node API
    return iNaturalistAPI.upload( "computervision/score_image", params, options )
      .then( response => {
        response.results = response.results.map( r => (
          Object.assign( { }, r, { taxon: new Taxon( r.taxon ) } )
        ) );
        if ( response.common_ancestor ) {
          response.common_ancestor.taxon = new Taxon( response.common_ancestor.taxon );
        }
        return response;
      } );
  }

  static score_observation( params, opts = { } ) { // eslint-disable-line camelcase
    const options = Object.assign( { }, opts );
    options.useAuth = true;
    return iNaturalistAPI.get( "computervision/score_observation/:id", params, options )
      .then( response => {
        response.results = response.results.map( r => (
          Object.assign( { }, r, { taxon: new Taxon( r.taxon ) } )
        ) );
        if ( response.common_ancestor ) {
          response.common_ancestor.taxon = new Taxon( response.common_ancestor.taxon );
        }
        return response;
      } );
  }
};

module.exports = computervision;
