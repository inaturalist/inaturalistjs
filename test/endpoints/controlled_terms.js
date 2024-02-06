const { expect } = require( "chai" );
const nock = require( "nock" );
const controlledTerms = require( "../../lib/endpoints/controlled_terms" );
const testHelper = require( "../../lib/test_helper" );

const mockControlledTermsResponse = {
  total_results: 1,
  page: 1,
  per_page: 1,
  results: [
    {
      id: 6,
      ontology_uri: "",
      uri: "",
      valid_within_clade: 12,
      is_value: false,
      multivalued: true,
      values: [
        {
          id: 7,
          ontology_uri: "",
          uri: "",
          valid_within_clade: 19,
          label: "Flowering"
        },
        {
          id: 8,
          ontology_uri: "",
          uri: "",
          valid_within_clade: 19,
          label: "Fruiting"
        }
      ],
      label: "Plant Phenology"
    }
  ]
};

describe( "ControlledTerms", ( ) => {
  describe( "search", ( ) => {
    it( "returns ControlledTerm records", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/controlled_terms" )
        .reply( 200, mockControlledTermsResponse );
      controlledTerms.search( ).then( r => {
        expect( r.results[0].constructor.name ).to.eq( "ControlledTerm" );
        expect( r.results[0].values[0].constructor.name ).to.eq( "ControlledTerm" );
        done( );
      } );
    } );
  } );

  describe( "for_taxon", ( ) => {
    it( "succeeds", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/controlled_terms/for_taxon" )
        .reply( 200, mockControlledTermsResponse );
      controlledTerms.for_taxon( { } ).then( r => {
        expect( r.results[0].constructor.name ).to.eq( "ControlledTerm" );
        done( );
      } );
    } );

    it( "does not fail if there is no results attribute", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/controlled_terms/for_taxon" )
        .reply( 200, { } );
      controlledTerms.for_taxon( { } ).then( ( ) => {
        done( );
      } );
    } );

    describe( "v2", ( ) => {
      beforeEach( testHelper.v1ToV2 );
      afterEach( testHelper.v2ToV1 );
      it( "concatenates taxon_ids", done => {
        nock( "http://localhost:4000" )
          .get( "/v2/controlled_terms/for_taxon/1,2,3,4" )
          .reply( 200, { } );
        controlledTerms.for_taxon( { taxon_id: [1, 2, 3, 4] } ).then( ( ) => {
          done( );
        } );
      } );
    } );
  } );
} );
