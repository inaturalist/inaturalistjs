const iNaturalistAPI = require( "../inaturalist_api" );
const ControlledTerm = require( "../models/controlled_term" );
const Observation = require( "../models/observation" );
const Project = require( "../models/project" );
const Taxon = require( "../models/taxon" );
const User = require( "../models/user" );

const observations = class observations {
  static create( params, options ) {
    return iNaturalistAPI.post( "observations", params, options )
      .then( Observation.typifyInstanceResponse );
  }

  static update( params, options ) {
    return iNaturalistAPI.put( "observations/:id", params, options )
      .then( Observation.typifyInstanceResponse );
  }

  static delete( params, options ) {
    return iNaturalistAPI.delete( "observations/:id", params, options );
  }

  static fave( params, options ) {
    if ( !iNaturalistAPI.apiURL || iNaturalistAPI.apiURL.match( /\/v1/ ) ) {
      return observations.vote( params, options );
    }
    return iNaturalistAPI.post( "observations/:id/fave", params, options );
  }

  static unfave( params, options ) {
    // return observations.unvote( params, options );
    if ( !iNaturalistAPI.apiURL || iNaturalistAPI.apiURL.match( /\/v1/ ) ) {
      return observations.unvote( params, options );
    }
    return iNaturalistAPI.delete( "observations/:id/fave", params, options );
  }

  static vote( params, options ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      throw ( new Error( "API v2 does not support observations.vote. Use fave or setQualityMetric instead." ) );
    }
    return iNaturalistAPI.post( "votes/vote/observation/:id", params, options )
      .then( Observation.typifyInstanceResponse );
  }

  static unvote( params, options ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      throw ( new Error( "API v2 does not support observations.unvote. Use unfave or deleteQualityMetric instead." ) );
    }
    return iNaturalistAPI.delete( "votes/unvote/observation/:id", params, options );
  }

  static subscribe( params, options ) {
    if ( iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match( /\/v2/ ) ) {
      return iNaturalistAPI.put( "observations/:id/subscription", params, options );
    }
    return iNaturalistAPI.post( "subscriptions/Observation/:id/subscribe", params, options );
  }

  static review( params, options ) {
    const p = { ...params };
    p.reviewed = "true";
    return iNaturalistAPI.post( "observations/:id/review", p, options );
  }

  static unreview( params, options ) {
    const p = { ...params };
    return iNaturalistAPI.delete( "observations/:id/review", p, options );
  }

  static qualityMetrics( params, options ) {
    return iNaturalistAPI.get( "observations/:id/quality_metrics", params, options );
  }

  static setQualityMetric( params, options ) {
    return iNaturalistAPI.post( "observations/:id/quality/:metric", params, options );
  }

  static deleteQualityMetric( params, options ) {
    return iNaturalistAPI.delete( "observations/:id/quality/:metric", params, options );
  }

  static fetch( ids, params ) {
    return iNaturalistAPI.fetch( "observations", ids, params )
      .then( Observation.typifyResultsResponse );
  }

  static search( params, opts = { } ) {
    return iNaturalistAPI.get( "observations", params, { ...opts, useAuth: true } )
      .then( Observation.typifyResultsResponse );
  }

  static identifiers( params ) {
    return iNaturalistAPI.get( "observations/identifiers", params )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, user: new User( r.user ) }
          ) );
        }
        return response;
      } );
  }

  static observers( params ) {
    return iNaturalistAPI.get( "observations/observers", params )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, user: new User( r.user ) }
          ) );
        }
        return response;
      } );
  }

  static speciesCounts( params, opts = { } ) {
    return iNaturalistAPI.get( "observations/species_counts", params, { ...opts, useAuth: true } )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, taxon: new Taxon( r.taxon ) }
          ) );
        }
        return response;
      } );
  }

  static iconicTaxaCounts( params, opts = { } ) {
    return iNaturalistAPI.get( "observations/iconic_taxa_counts", params, { ...opts, useAuth: true } )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, taxon: new Taxon( r.taxon ) }
          ) );
        }
        return response;
      } );
  }

  static iconicTaxaSpeciesCounts( params, opts = { } ) {
    return iNaturalistAPI.get( "observations/iconic_taxa_species_counts", params, { ...opts, useAuth: true } )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, taxon: new Taxon( r.taxon ) }
          ) );
        }
        return response;
      } );
  }

  static popularFieldValues( params ) {
    return iNaturalistAPI.get( "observations/popular_field_values", params )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( res => {
            const r = { ...res };
            r.controlled_attribute = new ControlledTerm( r.controlled_attribute );
            r.controlled_value = new ControlledTerm( r.controlled_value );
            return r;
          } );
        }
        return response;
      } );
  }

  static umbrellaProjectStats( params ) {
    return iNaturalistAPI.get( "observations/umbrella_project_stats", params )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, project: new Project( r.project ) }
          ) );
        }
        return response;
      } );
  }

  static histogram( params ) {
    return iNaturalistAPI.get( "observations/histogram", params );
  }

  static qualityGrades( params ) {
    return iNaturalistAPI.get( "observations/quality_grades", params );
  }

  static subscriptions( params, options ) {
    return iNaturalistAPI.get(
      "observations/:id/subscriptions",
      params,
      iNaturalistAPI.optionsUseAuth( options )
    );
  }

  static taxonSummary( params ) {
    return iNaturalistAPI.get( "observations/:id/taxon_summary", params );
  }

  static updates( params, options ) {
    return iNaturalistAPI.get(
      "observations/updates",
      params,
      iNaturalistAPI.optionsUseAuth( options )
    );
  }

  static viewedUpdates( params, options ) {
    return iNaturalistAPI.put(
      "observations/:id/viewed_updates",
      params,
      iNaturalistAPI.optionsUseAuth( options )
    );
  }

  static identificationCategories( params ) {
    return iNaturalistAPI.get( "observations/identification_categories", params );
  }

  static taxonomy( params ) {
    return iNaturalistAPI.get( "observations/taxonomy", params )
      .then( Taxon.typifyResultsResponse );
  }

  static similarSpecies( params, opts ) {
    const options = { ...opts || { } };
    options.useAuth = true;
    return iNaturalistAPI.get( "observations/similar_species", params, options )
      .then( response => {
        if ( response.results ) {
          response.results = response.results.map( r => (
            { ...r, taxon: new Taxon( r.taxon ) }
          ) );
        }
        return response;
      } );
  }

  static taxa( params ) {
    return iNaturalistAPI.get( "observations/taxa", params );
  }
};

module.exports = observations;
