require( "cross-fetch/polyfill" );
require( "../initialize" );
const nock = require( "nock" );
const taxonIdSummaries = require( "../../lib/endpoints/taxon_id_summaries" );
const testHelper = require( "../../lib/test_helper" );

describe( "taxonIdSummaries quality metrics", ( ) => {
  const uuid = "123e4567-e89b-12d3-a456-426614174000";

  beforeEach( testHelper.v1ToV2 );
  afterEach( testHelper.v2ToV1 );

  it( "gets summary quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .get( `/v2/taxon_id_summaries/${uuid}/id_summaries/1/quality_metrics` )
      .reply( 200, testHelper.mockResponse( "quality metrics" ) );
    return taxonIdSummaries.summaryQualityMetrics( { uuid, id: 1 } );
  } );

  it( "sets summary quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .post( `/v2/taxon_id_summaries/${uuid}/id_summaries/1/quality/wild`, { agree: true } )
      .reply( 200, { results: [] } );
    return taxonIdSummaries.setSummaryQualityMetric(
      {
        uuid, id: 1, metric: "wild", agree: true
      }
    );
  } );

  it( "deletes summary quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .delete( `/v2/taxon_id_summaries/${uuid}/id_summaries/1/quality/wild` )
      .reply( 200, { } );
    return taxonIdSummaries.deleteSummaryQualityMetric(
      { uuid, id: 1, metric: "wild" }
    );
  } );

  it( "gets reference quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .get( `/v2/taxon_id_summaries/${uuid}/id_summaries/1/references/2/quality_metrics` )
      .reply( 200, testHelper.mockResponse( "reference quality metrics" ) );
    return taxonIdSummaries.referenceQualityMetrics(
      { uuid, id: 1, reference_id: 2 }
    );
  } );

  it( "sets reference quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .post(
        `/v2/taxon_id_summaries/${uuid}/id_summaries/1/references/2/quality/wild`,
        { agree: false }
      )
      .reply( 200, { results: [] } );
    return taxonIdSummaries.setReferenceQualityMetric(
      {
        uuid, id: 1, reference_id: 2, metric: "wild", agree: false
      }
    );
  } );

  it( "deletes reference quality metrics", ( ) => {
    nock( "http://localhost:4000" )
      .delete(
        `/v2/taxon_id_summaries/${uuid}/id_summaries/1/references/2/quality/wild`
      )
      .reply( 200, { } );
    return taxonIdSummaries.deleteReferenceQualityMetric(
      {
        uuid, id: 1, reference_id: 2, metric: "wild"
      }
    );
  } );
} );
