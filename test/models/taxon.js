const { expect } = require( "chai" );
const Taxon = require( "../../lib/models/taxon" );

describe( "Taxon", ( ) => {
  describe( "constructor", ( ) => {
    it( "creates a defaultPhoto", ( ) => {
      const t = new Taxon( { id: 11, default_photo: { id: 22, url: "testurl" } } );
      expect( t.defaultPhoto.constructor.name ).to.eq( "Photo" );
      expect( t.defaultPhoto.id ).to.eq( 22 );
      expect( t.defaultPhoto.url ).to.eq( "testurl" );
    } );
    it( "converts nested object attributes to camelcase", ( ) => {
      const t = new Taxon( {
        id: 11,
        default_photo: { id: 22, url: "testurl", license_code: "cc-by-nc" }
      } );
      expect( t.defaultPhoto.license_code ).to.eq( t.default_photo.license_code );
    } );
  } );

  describe( "getIconicTaxonName", ( ) => {
    it( "returns the iconic_taxon_name", ( ) => {
      const t = new Taxon( { iconic_taxon_name: "test" } );
      expect( t.getIconicTaxonName( ) ).to.eq( "test" );
    } );

    it( "returns unknown if there is no iconic taxon name", ( ) => {
      const t = new Taxon( { iconic_taxon_name: "" } );
      expect( t.getIconicTaxonName( ) ).to.eq( "Unknown" );
    } );
  } );

  describe( "photoTag", ( ) => {
    it( "returns the default_photo square url if available", ( ) => {
      const t = new Taxon( { default_photo: { square_url: "testsquareurl" } } );
      expect( t.photoTag( ) ).to.include( "testsquareurl" );
    } );

    it( "uses the iconic taxon icon by default", ( ) => {
      const t = new Taxon( { iconic_taxon_name: "testiconicname" } );
      expect( t.photoTag( ) ).to.include( "testiconicname" );
    } );
  } );
} );
