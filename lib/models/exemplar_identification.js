const Model = require( "./model" );
const Identification = require( "./identification" );
const Observation = require( "./observation" );

const ExemplarIdentification = class ExemplarIdentification extends Model {
  constructor( attrs ) {
    super( attrs );
    if ( this.identification ) {
      this.identification = new Identification( this.identification );
      if ( this.identification.observation ) {
        this.identification.observation = new Observation( this.identification.observation );
      }
    }
  }

  static typifyInstanceResponse( response ) {
    return super.typifyInstanceResponse( response, ExemplarIdentification );
  }

  static typifyResultsResponse( response ) {
    return super.typifyResultsResponse( response, ExemplarIdentification );
  }
};

module.exports = ExemplarIdentification;
