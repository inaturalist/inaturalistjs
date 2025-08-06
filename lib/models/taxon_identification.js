const Model = require( "./model" );
const Observation = require( "./observation" );

const TaxonIdentification = class TaxonIdentification extends Model {
  constructor( attrs ) {
    super( attrs );
    if ( this.observation ) {
      this.observation = new Observation( this.observation );
    }
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, TaxonIdentification );
  }
};

module.exports = TaxonIdentification;
