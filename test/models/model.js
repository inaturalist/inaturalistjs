const { expect } = require( "chai" );
const Model = require( "../../lib/models/model" );

describe( "Model", ( ) => {
  describe( "constructor", ( ) => {
    it( "populates model attributes", ( ) => {
      const o = new Model( { name: "modelname" } );
      expect( o.constructor.name ).to.eq( "Model" );
      expect( o.name ).to.eq( "modelname" );
    } );
    it( "creates camelcase versions of all snakecase attributes", ( ) => {
      const t = new Model( { id: 1, iconic_taxon_name: "foo" } );
      expect( t.iconicTaxonName ).not.to.be.empty;
      expect( t.iconicTaxonName ).to.eq( t.iconic_taxon_name );
    } );
    it( "creates snakecase versions of camelcase attributes", ( ) => {
      const o = new Model( { id: 1, iconicTaxonName: "foo" } );
      expect( o.iconic_taxon_name ).not.to.be.empty;
      expect( o.iconic_taxon_name ).to.eq( o.iconicTaxonName );
    } );
  } );

  describe( "typifyResultsResponse", ( ) => {
    it( "turns response results into types", ( ) => {
      const r = { results: [{ name: "modelname" }] };
      expect( r.results[0].constructor.name ).to.eq( "Object" );
      Model.typifyResultsResponse( r, Model );
      expect( r.results[0].constructor.name ).to.eq( "Model" );
      expect( r.results[0].name ).to.eq( "modelname" );
    } );

    it( "does nothing if there are no results", ( ) => {
      const r = { count: 156 };
      Model.typifyResultsResponse( r, Model );
      expect( r ).to.deep.eq( { count: 156 } );
    } );
  } );
} );
