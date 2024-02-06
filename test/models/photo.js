const { expect } = require( "chai" );
const Photo = require( "../../lib/models/photo" );

describe( "Photo", ( ) => {
  describe( "photoUrl", ( ) => {
    it( "should return undefined if no photo present", ( ) => {
      const p = new Photo( { url: null } );
      expect( p.photoUrl( ) ).to.not.exist;
    } );

    it( "takes optional sizes", ( ) => {
      const p = new Photo( {
        attribution: "no rights reserved",
        id: 519,
        license_code: "cc0",
        url: "http://localhost:3000/attachments/local_photos/files/519/square/pic1.jpg"
      } );
      expect( p.photoUrl( "medium" ) ).to.match( /medium/ );
      expect( p.photoUrl( "large" ) ).to.match( /large/ );
      expect( p.photoUrl( ) ).to.match( /square/ );
    } );

    it( "caches the photoUrl by size", ( ) => {
      const p = new Photo( { url: "test" } );
      expect( p.photoUrl( ) ).to.eq( "test" );
      p.url = "changed";
      expect( p.photoUrl( ) ).to.eq( "test" );
      expect( p.photoUrl( "medium" ) ).to.eq( "changed" );
    } );

    it( "should return multiple sizes regardless of file extension", ( ) => {
      const p = new Photo( {
        attribution: "no rights reserved",
        id: 519,
        license_code: "cc0",
        url: "http://static.inaturalist.org/photos/3789931/square.bmp"
      } );
      expect( p.photoUrl( "medium" ) ).to.match( /medium/ );
      expect( p.photoUrl( "large" ) ).to.match( /large/ );
      expect( p.photoUrl( ) ).to.match( /square/ );
    } );

    it( "should return multiple sizes with no file extension", ( ) => {
      const p = new Photo( {
        attribution: "no rights reserved",
        id: 519,
        license_code: "cc0",
        url: "http://static.inaturalist.org/photos/3789931/square"
      } );
      expect( p.photoUrl( "medium" ) ).to.match( /medium/ );
      expect( p.photoUrl( "large" ) ).to.match( /large/ );
      expect( p.photoUrl( ) ).to.match( /square/ );
    } );

    it( "should return explicit photo URLs if present", ( ) => {
      const url = "http://static.inaturalist.org/photos/123/l.jpg";
      const p = new Photo( {
        large_url: url
      } );
      expect( p.photoUrl( "large" ) ).to.eq( url );
    } );
  } );

  describe( "dimensions", ( ) => {
    it( "return original by default", ( ) => {
      const originalDimensions = {
        width: 1365,
        height: 2048
      };
      const p = new Photo( {
        url: "http://static.inaturalist.org/photos/3789931/square",
        original_dimensions: originalDimensions
      } );
      expect( p.dimensions( ) ).to.eq( originalDimensions );
    } );
    it( "calculate based on size", ( ) => {
      const originalDimensions = {
        width: 1365,
        height: 2048
      };
      const p = new Photo( {
        url: "http://static.inaturalist.org/photos/3789931/square",
        original_dimensions: originalDimensions
      } );
      expect( p.dimensions( "medium" ).height ).to.eq( 500 );
      expect( p.dimensions( "medium" ).width ).to.eq( 333 );
    } );
    it( "should return nothing for any size if no dimensions", ( ) => {
      const p = new Photo( {
        url: "http://static.inaturalist.org/photos/3789931/square"
      } );
      expect( p.dimensions( ) ).not.to.exist;
      expect( p.dimensions( "medium" ) ).not.to.exist;
    } );
    it( "should return nothing if original is smaller than requested size", ( ) => {
      const originalDimensions = {
        width: 300,
        height: 300
      };
      const p = new Photo( {
        url: "http://static.inaturalist.org/photos/3789931/square",
        original_dimensions: originalDimensions
      } );
      expect( p.dimensions( ).width ).to.eq( originalDimensions.width );
      expect( p.dimensions( "medium" ) ).not.to.exist;
    } );
  } );

  describe( "flaggedAsCopyrighted", ( ) => {
    it( "returns false if there are no flags", ( ) => {
      const p = new Photo( { flags: [] } );
      expect( p.flaggedAsCopyrighted( ) ).to.be.false;
    } );

    it( "returns true if there is an unresolved copyright infringement flag", ( ) => {
      const p = new Photo( {
        flags: [{
          resolved: false,
          flag: "copyright infringement"
        }]
      } );
      expect( p.flaggedAsCopyrighted( ) ).to.be.true;
    } );

    it( "returns false if all copyright infringement flags are resolved", ( ) => {
      const p = new Photo( {
        flags: [{
          resolved: true,
          flag: "copyright infringement"
        }]
      } );
      expect( p.flaggedAsCopyrighted( ) ).to.be.false;
    } );
  } );
} );
