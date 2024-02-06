const Model = require( "./model" );

const ConservationStatus = class ConservationStatus extends Model {
  iucnStatus( ) {
    switch ( this.iucn ) {
      case 0:
        return "not evaluated";
      case 5:
        return "data deficient";
      case 10:
        return "least concern";
      case 20:
        return "near threatened";
      case 30:
        return "vulnerable";
      case 40:
        return "endangered";
      case 50:
        return "critically endangered";
      case 60:
        return "extinct in the wild";
      case 70:
        return "extinct";
      default:
        return null;
    }
  }

  iucnStatusCode( ) {
    return {
      "not evaluated": "NE",
      "data deficient": "DD",
      "least concern": "LC",
      "near threatened": "NT",
      vulnerable: "VU",
      endangered: "EN",
      "critically endangered": "CR",
      "extinct in the wild": "EW",
      extinct: "EX"
    }[this.iucnStatus( )];
  }

  statusText( ) {
    switch ( this.authority ) {
      case "IUCN Red List":
        return this.iucnStatus( );
      case "NatureServe":
        return this.natureServeStatus( );
      case "Norma Oficial 059":
        return this.normaStatus( );
      default:
        if ( !this.status ) {
          return this.status;
        }
        switch ( this.status.toLowerCase( ) ) {
          case "se":
          case "fe":
          case "le":
          case "e":
            return "endangered";
          case "st":
          case "ft":
          case "lt":
          case "t":
            return "threatened";
          case "sc":
            return "special concern";
          case "c":
            return "candidate";
          default:
            if ( this.description && this.description.length < 50 ) {
              return `${this.description} (${this.status})`;
            }
            return this.status;
        }
    }
  }

  natureServeStatus( ) {
    const status = this.status || "";
    const matches = status.match( /T(.)/ );
    const nsStatus = matches ? matches[1] : status[1];
    switch ( nsStatus ) {
      case "X":
        return "extinct";
      case "H":
        return "possibly extinct";
      case "1":
        return "critically imperiled";
      case "2":
        return "imperiled";
      case "3":
        return "vulnerable";
      case "4":
        return "apparently secure";
      case "5":
        return "secure";
      default:
        return this.status;
    }
  }

  normaStatus( ) {
    switch ( this.status ) {
      case "P":
        return "en peligro de extinción";
      case "A":
        return "amenazada";
      case "Pr":
        return "sujeta a protección especial";
      case "Ex":
        return "probablemente extinta en el medio silvestre";
      default:
        return this.status;
    }
  }
};

module.exports = ConservationStatus;
