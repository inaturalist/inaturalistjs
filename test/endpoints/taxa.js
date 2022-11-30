const { expect } = require( "chai" );
const nock = require( "nock" );
const taxa = require( "../../lib/endpoints/taxa" );
const testHelper = require( "../../lib/test_helper" );

describe( "Taxa", ( ) => {
  describe( "fetch", ( ) => {
    it( "fetches taxa by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.mockResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/taxa/1" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "Taxon" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
    it( "passes params through to the API", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1?preferred_place_id=1" )
        .reply( 200, testHelper.mockResponse );
      taxa.fetch( 1, { preferred_place_id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/taxa/1?preferred_place_id=1" );
        done( );
      } );
    } );
    it( "defaultPhoto is a Photo", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].defaultPhoto.constructor.name ).to.eq( "Photo" );
        done( );
      } );
    } );
    it( "taxonPhotos have a Taxon and a Photo", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].taxonPhotos[0].taxon.constructor.name ).to.eq( "Taxon" );
        expect( r.results[0].taxonPhotos[0].photo.constructor.name ).to.eq( "Photo" );
        expect( r.results[0].taxonPhotos[0].photo.photoUrl( "large" ) ).to.match( /219b9ab6c5_b/ );
        done( );
      } );
    } );
    it( "conservationStatus is a ConservationStatus", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].conservationStatus.constructor.name ).to.eq( "ConservationStatus" );
        done( );
      } );
    } );
    it( "conservationStatuses are ConservationStatuses", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].conservationStatuses[0].constructor.name ).to.eq( "ConservationStatus" );
        done( );
      } );
    } );
    it( "ancestorTaxa are Taxa", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].ancestorTaxa[0].constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );
    it( "childTaxa are Taxa", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.taxonResponse );
      taxa.fetch( 1 ).then( r => {
        expect( r.results[0].childTaxa[0].constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );
    it( "authenticates requests", ( ) => {
      const jwt = "key";
      // Nock will throw an exception if it receives a request without the
      // headers specified here. FWIW I tried using chai-nock but I never got
      // it to fail correctly. ~~~kueda 20220901
      nock( "http://localhost:4000", { reqheaders: { Authorization: jwt } } )
        .get( "/v1/taxa/1" )
        .reply( 200, testHelper.mockResponse );
      return taxa.fetch( 1, {}, { api_token: jwt } );
    } );
  } );

  describe( "autocomplete", ( ) => {
    it( "fetches observations by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/autocomplete?q=Animals" )
        .reply( 200, testHelper.mockResponse );
      taxa.autocomplete( { q: "Animals" } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/taxa/autocomplete?q=Animals" );
        done( );
      } );
    } );
  } );

  describe( "suggest", ( ) => {
    it( "returns taxon objects", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/suggest" )
        .reply( 200, testHelper.suggestResponse );
      taxa.suggest( ).then( r => {
        expect( r.results[0].taxon.constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );
  } );

  describe( "wanted", ( ) => {
    it( "returns taxon objects", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/taxa/1/wanted" )
        .reply( 200, testHelper.taxonResponse );
      taxa.wanted( { id: 1 } ).then( r => {
        expect( r.results[0].constructor.name ).to.eq( "Taxon" );
        done( );
      } );
    } );
  } );
} );
