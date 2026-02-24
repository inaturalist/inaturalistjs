const iNaturalistAPI = require( "../inaturalist_api" );
const TaxonIdSummary = require( "../models/taxon_id_summary" );

const taxonIdSummaries = class taxonIdSummaries {
  static fetch( ids, params ) {
    return iNaturalistAPI.fetch( "taxon_id_summaries", ids, params )
      .then( TaxonIdSummary.typifyResultsResponse );
  }

  static search( params, options ) {
    return iNaturalistAPI.get( "taxon_id_summaries", params, options )
      .then( TaxonIdSummary.typifyResultsResponse );
  }

  static summaryQualityMetrics( params, options ) {
    return iNaturalistAPI.get(
      "taxon_id_summaries/:uuid/id_summaries/:id/quality_metrics",
      params,
      options
    );
  }

  static setSummaryQualityMetric( params, options ) {
    return iNaturalistAPI.post(
      "taxon_id_summaries/:uuid/id_summaries/:id/quality/:metric",
      params,
      options
    );
  }

  static deleteSummaryQualityMetric( params, options ) {
    return iNaturalistAPI.delete(
      "taxon_id_summaries/:uuid/id_summaries/:id/quality/:metric",
      params,
      options
    );
  }

  static referenceQualityMetrics( params, options ) {
    return iNaturalistAPI.get(
      "taxon_id_summaries/:uuid/id_summaries/:id/references/:reference_id/quality_metrics",
      params,
      options
    );
  }

  static setReferenceQualityMetric( params, options ) {
    return iNaturalistAPI.post(
      "taxon_id_summaries/:uuid/id_summaries/:id/references/:reference_id/quality/:metric",
      params,
      options
    );
  }

  static deleteReferenceQualityMetric( params, options ) {
    return iNaturalistAPI.delete(
      "taxon_id_summaries/:uuid/id_summaries/:id/references/:reference_id/quality/:metric",
      params,
      options
    );
  }
};

module.exports = taxonIdSummaries;
