const Model = require( "./model" );

const TaxonIdSummary = class TaxonIdSummary extends Model {
  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, TaxonIdSummary );
  }

  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, TaxonIdSummary );
  }
};

module.exports = TaxonIdSummary;
