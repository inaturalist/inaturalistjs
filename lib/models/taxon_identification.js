const Model = require( "./model" );
const Identification = require( "./identification" );
const Observation = require( "./observation" );

const TaxonIdentification = class TaxonIdentification extends Model {
  constructor( attrs ) {
    super( attrs );
    if ( this.identification ) {
      this.identification = new Identification( this.identification );
    }
    if ( this.identification.observation ) {
      this.identification.observation = new Observation( this.identification.observation );
    }
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, TaxonIdentification );
  }
};

module.exports = TaxonIdentification;
