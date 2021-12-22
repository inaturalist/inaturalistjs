const Model = require( "./model" );
const Photo = require( "./photo" );
const User = require( "./user" );
const ConservationStatus = require( "./conservation_status" );

const Taxon = class Taxon extends Model {
  constructor( attrs ) {
    super( attrs );
    if ( this.default_photo && this.default_photo !== undefined ) {
      this.defaultPhoto = new Photo( this.default_photo );
    }
    if ( this.taxon_photos && this.taxon_photos !== undefined ) {
      this.taxonPhotos = this.taxon_photos.map( tp => ( {
        taxon: new Taxon( tp.taxon ),
        photo: new Photo( tp.photo )
      } ) );
    }
    if ( this.conservation_status && this.conservation_status !== undefined ) {
      this.conservationStatus = new ConservationStatus( this.conservation_status );
    }
    if ( this.conservation_statuses && this.conservation_statuses !== undefined ) {
      this.conservationStatuses = this.conservation_statuses
        .map( cs => new ConservationStatus( cs ) );
    }
    if ( this.ancestors && this.ancestors !== undefined ) {
      this.ancestorTaxa = this.ancestors.map( a => new Taxon( a ) );
    }
    if ( this.children && this.children !== undefined ) {
      this.childTaxa = this.children.map( a => new Taxon( a ) );
    }
    if ( this.taxon_curators && this.taxon_curators !== undefined ) {
      this.taxonCurators = this.taxon_curators.map( tc => ( { user: new User( tc.user ) } ) );
    }
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, Taxon );
  }

  getIconicTaxonName( ) {
    if ( this.iconic_taxon_name && this.iconic_taxon_name.length > 0 ) {
      return this.iconic_taxon_name;
    }
    return "Unknown";
  }

  photoTag( ) {
    if ( this.default_photo ) {
      return `<img src='${this.default_photo.square_url}'/>`;
    }
    return `<i class='icon icon-iconic-${this.getIconicTaxonName( ).toLowerCase( )}'/>`;
  }
};

module.exports = Taxon;
