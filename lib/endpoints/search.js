const iNaturalistAPI = require( "../inaturalist_api" );
const Place = require( "../models/place" );
const Project = require( "../models/project" );
const Taxon = require( "../models/taxon" );
const User = require( "../models/user" );

const search = class search {
  static index( params = { }, options = { } ) {
    return iNaturalistAPI.get( "search", params, options ).then( response => {
      if ( response.results ) {
        response.results.forEach( ( result, index ) => {
          let instanceAttribute;
          if ( result.type === "Place" ) {
            instanceAttribute = ( "record" in result ) ? "record" : "place";
            response.results[index][instanceAttribute] = new Place( result[instanceAttribute] );
          } else if ( result.type === "Project" ) {
            instanceAttribute = ( "record" in result ) ? "record" : "project";
            response.results[index][instanceAttribute] = new Project( result[instanceAttribute] );
          } else if ( result.type === "Taxon" ) {
            instanceAttribute = ( "record" in result ) ? "record" : "taxon";
            response.results[index][instanceAttribute] = new Taxon( result[instanceAttribute] );
          } else if ( result.type === "User" ) {
            instanceAttribute = ( "record" in result ) ? "record" : "user";
            response.results[index][instanceAttribute] = new User( result[instanceAttribute] );
          }
        } );
      }
      return response;
    } );
  }
};

module.exports = search.index;
