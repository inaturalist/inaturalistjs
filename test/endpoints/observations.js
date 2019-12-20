const { expect } = require( "chai" );
const nock = require( "nock" );
const observations = require( "../../lib/endpoints/observations" );
const testHelper = require( "../../lib/test_helper" );

describe( "Observation", ( ) => {
  describe( "create", ( ) => {
    it( "posts to /observations", done => {
      nock( "http://localhost:3000" )
        .post( "/observations", { body: "testbody" } )
        .reply( 200, { id: 1 } );
      observations.create( { body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "update", ( ) => {
    it( "puts to /observations/:id", done => {
      nock( "http://localhost:3000" )
        .put( "/observations/1", { id: 1, body: "testbody" } )
        .reply( 200, { id: 1 } );
      observations.update( { id: 1, body: "testbody" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "delete", ( ) => {
    it( "deletes to /observations/:id", done => {
      nock( "http://localhost:3000" )
        .delete( "/observations/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      observations.delete( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "fave", ( ) => {
    it( "posts to /votes/vote/observation/:id", done => {
      nock( "http://localhost:3000" )
        .post( "/votes/vote/observation/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      observations.fave( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "unfave", ( ) => {
    it( "deletes to /votes/unvote/observation/:id", done => {
      nock( "http://localhost:3000" )
        .delete( "/votes/unvote/observation/1", { id: 1 } )
        .reply( 200, { id: 1 } );
      observations.unfave( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "review", ( ) => {
    it( "posts to /observations/:id/review", done => {
      nock( "http://localhost:3000" )
        .post( "/observations/1/review", { id: 1, reviewed: "true" } )
        .reply( 200, { id: 1 } );
      observations.review( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "unreview", ( ) => {
    it( "deletes to /observations/:id/review", done => {
      nock( "http://localhost:3000" )
        .delete( "/observations/1/review", { id: 1 } )
        .reply( 200, { id: 1 } );
      observations.unreview( { id: 1 } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "setQualityMetric", ( ) => {
    it( "posts to /observations/:id/quality/:metric", done => {
      nock( "http://localhost:3000" )
        .post( "/observations/1/quality/wild", { id: 1, metric: "wild", agree: "true" } )
        .reply( 200, { id: 1 } );
      observations.setQualityMetric( { id: 1, metric: "wild", agree: "true" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "deleteQualityMetric", ( ) => {
    it( "deleted to /observations/:id/quality/:metric", done => {
      nock( "http://localhost:3000" )
        .delete( "/observations/1/quality/wild", { id: 1, metric: "wild" } )
        .reply( 200, { id: 1 } );
      observations.deleteQualityMetric( { id: 1, metric: "wild" } ).then( ( ) => {
        done( );
      } );
    } );
  } );

  describe( "fetch", ( ) => {
    it( "fetches observations by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/1" )
        .reply( 200, testHelper.mockResponse );
      observations.fetch( 1 ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/observations/1" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "Observation" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );

    it( "fetches observations by mulitple IDs", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/1,2" )
        .reply( 200, testHelper.mockResponse );
      observations.fetch( [1, 2] ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/observations/1,2" );
        expect( r.total_results ).to.eq( 1 );
        done( );
      } );
    } );

    it( "throws errors", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/404" )
        .reply( 404, { error: "not found" } );
      observations.fetch( 404 ).catch( e => {
        expect( e.response.status ).to.eq( 404 );
        expect( e.response.statusText ).to.eq( "Not Found" );
        done( );
      } );
    } );

    it( "should accept params", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/1,2?locale=es" )
        .reply( 200, testHelper.mockResponse );
      observations.fetch( [1, 2], { locale: "es" } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/observations/1,2?locale=es" ); // does this really test anything?
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "search", ( ) => {
    it( "fetches observations by ID", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations" )
        .reply( 200, testHelper.mockResponse );
      observations.search( ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/observations" );
        expect( r.constructor.name ).to.eq( "iNaturalistAPIResponse" );
        expect( r.total_results ).to.eq( 1 );
        expect( r.results[0].constructor.name ).to.eq( "Observation" );
        expect( r.results[0].id ).to.eq( 1 );
        done( );
      } );
    } );

    it( "fetches observations by mulitple IDs", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations?taxon_id=1" )
        .reply( 200, testHelper.mockResponse );
      observations.search( { taxon_id: 1 } ).then( r => {
        expect( r.test_uri ).to.eq( "/v1/observations?taxon_id=1" );
        expect( r.total_results ).to.eq( 1 );
        done( );
      } );
    } );
  } );

  describe( "identifiers", ( ) => {
    it( "returns an array of objects that contain users", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/identifiers" )
        .reply( 200, uri => (
          Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { count: 2, user: { id: 1 } },
              { count: 1, user: { id: 2 } }
            ]
          } )
        ) );
      observations.identifiers( ).then( r => {
        expect( r.results[0].user.constructor.name ).to.eq( "User" );
        done( );
      } );
    } );
  } );

  describe( "observers", ( ) => {
    it( "returns an array of objects that contain users and counts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/observers" )
        .reply( 200, uri => (
          Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { observation_count: 2, species_count: 2, user: { id: 1 } },
              { observation_count: 1, species_count: 1, user: { id: 2 } }
            ]
          } )
        ) );
      observations.observers( ).then( r => {
        expect( r.results[0].user.constructor.name ).to.eq( "User" );
        expect( r.results[0].observation_count ).to.exist;
        expect( r.results[0].species_count ).to.exist;
        done( );
      } );
    } );
  } );

  describe( "speciesCounts", ( ) => {
    it( "returns an array of objects that contain taxa and counts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/species_counts" )
        .reply( 200, uri => {
          const r = Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { count: 2, taxon: { id: 1 } },
              { count: 1, taxon: { id: 2 } }
            ]
          } );
          return r;
        } );
      observations.speciesCounts( ).then( r => {
        expect( r.results[0].taxon.constructor.name ).to.eq( "Taxon" );
        expect( r.results[0].count ).to.exist;
        done( );
      } );
    } );
  } );

  describe( "iconicTaxaCounts", ( ) => {
    it( "returns an array of objects that contain taxa and counts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/iconic_taxa_counts" )
        .reply( 200, uri => {
          const r = Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { count: 2, taxon: { id: 1 } },
              { count: 1, taxon: { id: 2 } }
            ]
          } );
          return r;
        } );
      observations.iconicTaxaCounts( ).then( r => {
        expect( r.results[0].taxon.constructor.name ).to.eq( "Taxon" );
        expect( r.results[0].count ).to.exist;
        done( );
      } );
    } );
  } );

  describe( "iconicTaxaSpeciesCounts", ( ) => {
    it( "returns an array of objects that contain taxa and counts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/iconic_taxa_species_counts" )
        .reply( 200, uri => {
          const r = Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { count: 2, taxon: { id: 1 } },
              { count: 1, taxon: { id: 2 } }
            ]
          } );
          return r;
        } );
      observations.iconicTaxaSpeciesCounts( ).then( r => {
        expect( r.results[0].taxon.constructor.name ).to.eq( "Taxon" );
        expect( r.results[0].count ).to.exist;
        done( );
      } );
    } );
  } );

  describe( "histogram", ( ) => {
    it( "returns a histogram", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/histogram" )
        .reply( 200, uri => {
          const r = Object.assign( testHelper.mockResponse( uri ), {
            results: {
              month_of_year: {
                1: 219,
                2: 148,
                3: 126,
                4: 104,
                5: 113,
                6: 311,
                7: 101,
                8: 93,
                9: 118,
                10: 197,
                11: 139,
                12: 121
              }
            }
          } );
          return r;
        } );
      observations.histogram( ).then( r => {
        expect( r.results.month_of_year ).to.be.an( "object" );
        done( );
      } );
    } );
  } );

  describe( "viewedUpdates", ( ) => {
    it( "puts to /observations/:id/viewed_updates", done => {
      nock( "http://localhost:3000" )
        .put( "/observations/1/viewed_updates", { id: 1 } )
        .reply( 200, { response: "success" } );
      observations.viewedUpdates( { id: 1 } ).then( r => {
        expect( r.response ).to.eq( "success" );
        done( );
      } );
    } );
  } );

  describe( "umbrellaProjectStats", ( ) => {
    it( "returns an array of objects that contain taxa and counts", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/umbrella_project_stats" )
        .reply( 200, uri => {
          const r = Object.assign( testHelper.mockResponse( uri ), {
            results: [
              { observation_count: 2, project: { id: 1 } },
              { observation_count: 1, project: { id: 2 } }
            ]
          } );
          return r;
        } );
      observations.umbrellaProjectStats( ).then( r => {
        expect( r.results[0].project.constructor.name ).to.eq( "Project" );
        expect( r.results[0].observation_count ).to.exist;
        done( );
      } );
    } );
  } );

  describe( "identificationCategories", ( ) => {
    it( "gets /observations/identification_categories", done => {
      nock( "http://localhost:4000" )
        .get( "/v1/observations/identification_categories" )
        .reply( 200, { response: "success" } );
      observations.identificationCategories( ).then( r => {
        expect( r.response ).to.eq( "success" );
        done( );
      } );
    } );
  } );
} );
