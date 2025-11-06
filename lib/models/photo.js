const Model = require( "./model" );

const Photo = class Photo extends Model {
  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, Photo );
  }

  photoUrl( size = "square" ) {
    this.cachedPhotos = this.cachedPhotos || {};
    if ( this.cachedPhotos[size] ) {
      return this.cachedPhotos[size];
    }
    if ( this[`${size}_url`] ) {
      return this[`${size}_url`];
    }
    if ( this.preview ) {
      this.cachedPhotos[size] = this.preview;
    } else if ( this.url ) {
      this.cachedPhotos[size] = this.url.replace( "square", size );
    } else if ( this.processing_url ) {
      this.cachedPhotos[size] = this.processing_url.replace( "large", size );
    } else { return null; }
    return this.cachedPhotos[size];
  }

  flaggedAsCopyrighted( ) {
    let flagged = false;
    this.flags.forEach( flag => {
      flagged = flagged || ( !flag.resolved && flag.flag === "copyright infringement" );
    } );
    return flagged;
  }

  flaggedAsArtificial( ) {
    let flagged = false;
    this.flags.forEach( flag => {
      flagged = flagged || ( !flag.resolved && flag.flag === "artificially generated content" );
    } );
    return flagged;
  }

  dimensions( size ) {
    const longEdges = {
      square: 75,
      thumb: 100,
      small: 240,
      medium: 500,
      large: 1024,
      original: 2048
    };
    if ( !longEdges[size] || size === "original" || !this.original_dimensions ) {
      return this.original_dimensions;
    }
    const w = this.original_dimensions.width;
    const h = this.original_dimensions.height;
    if ( Math.max( w, h ) < longEdges[size] ) {
      return null;
    }
    if ( w < h ) {
      return {
        width: Math.round( ( longEdges[size] / this.original_dimensions.height )
          * this.original_dimensions.width ),
        height: longEdges[size]
      };
    }
    return {
      width: longEdges[size],
      height: Math.round( ( longEdges[size] / this.original_dimensions.width )
        * this.original_dimensions.height )
    };
  }
};

module.exports = Photo;
