const _ = require( "lodash" );
const { expect } = require( "chai" );
const ConservationStatus = require( "../../lib/models/conservation_status" );

describe( "ConservationStatus", ( ) => {
  describe( "iucnStatus", ( ) => {
    it( "returns IUCN equivalent statuses", ( ) => {
      const iucnStatusEquivalents = {
        0: "not evaluated",
        5: "data deficient",
        10: "least concern",
        20: "near threatened",
        30: "vulnerable",
        40: "endangered",
        50: "critically endangered",
        60: "extinct in the wild",
        70: "extinct"
      };
      let cs;
      _.each( iucnStatusEquivalents, ( label, code ) => {
        cs = new ConservationStatus( { iucn: Number( code ) } );
        expect( cs.iucnStatus( ) ).to.eq( label );
      } );
    } );

    it( "returns null by default", ( ) => {
      const cs = new ConservationStatus( { iucn: 1000 } );
      expect( cs.iucnStatus( ) ).to.be.null;
    } );
  } );

  describe( "iucnStatusCode", ( ) => {
    it( "returns CR for critically endangered", ( ) => {
      const cs = new ConservationStatus( { iucn: 50 } );
      expect( cs.iucnStatusCode( ) ).to.eq( "CR" );
    } );
  } );

  describe( "statusText", ( ) => {
    it( "returns NatureServe statuses", ( ) => {
      const natureServeStatuses = {
        GX: "extinct",
        GH: "possibly extinct",
        G1: "critically imperiled",
        G2: "imperiled",
        G3: "vulnerable",
        G4: "apparently secure",
        G5: "secure",
        T1: "critically imperiled"
      };
      let cs;
      _.each( natureServeStatuses, ( label, code ) => {
        cs = new ConservationStatus( { status: code, authority: "NatureServe" } );
        expect( cs.statusText( ) ).to.eq( label );
      } );
    } );
    it( "returns the status for unrecognized NatureServe codes", ( ) => {
      const cs = new ConservationStatus( { status: "G9", authority: "NatureServe" } );
      expect( cs.statusText( ) ).to.eq( "G9" );
    } );
    it( "returns the an empty string for missing NatureServe codes", ( ) => {
      const cs = new ConservationStatus( { authority: "NatureServe" } );
      expect( cs.statusText( ) ).to.be.undefined;
    } );
    it( "returns Norma Oficial statuses", ( ) => {
      const normaOficialStatuses = {
        P: "en peligro de extinción",
        A: "amenazada",
        Pr: "sujeta a protección especial",
        Ex: "probablemente extinta en el medio silvestre"
      };
      let cs;
      _.each( normaOficialStatuses, ( label, code ) => {
        cs = new ConservationStatus( { status: code, authority: "Norma Oficial 059" } );
        expect( cs.statusText( ) ).to.eq( label );
      } );
    } );
    it( "returns the status for unrecognized Norma Oficial codes", ( ) => {
      const cs = new ConservationStatus( { status: "DNE", authority: "Norma Oficial 059" } );
      expect( cs.statusText( ) ).to.eq( "DNE" );
    } );
    it( "returns known statuses", ( ) => {
      const normaOficialStatuses = {
        se: "endangered",
        fe: "endangered",
        le: "endangered",
        e: "endangered",
        st: "threatened",
        ft: "threatened",
        lt: "threatened",
        t: "threatened",
        sc: "special concern",
        c: "candidate"
      };
      let cs;
      _.each( normaOficialStatuses, ( label, code ) => {
        cs = new ConservationStatus( { status: code } );
        expect( cs.statusText( ) ).to.eq( label );
      } );
    } );
    it( "returns critically endangered for IUCN CR", ( ) => {
      const cs = new ConservationStatus( { iucn: 50, authority: "IUCN Red List" } );
      expect( cs.statusText( ) ).to.eq( "critically endangered" );
    } );
    it( "returns endangered for e", ( ) => {
      const cs = new ConservationStatus( { status: "E" } );
      expect( cs.statusText( ) ).to.eq( "endangered" );
    } );
    it( "returns threatened for t", ( ) => {
      const cs = new ConservationStatus( { status: "T" } );
      expect( cs.statusText( ) ).to.eq( "threatened" );
    } );
    it( "defaults to description (code) for short descriptions", ( ) => {
      const cs = new ConservationStatus( { status: "foo", description: "bar" } );
      expect( cs.statusText( ) ).to.eq( "bar (foo)" );
    } );
    it( "defaults to code when description is missing", ( ) => {
      const cs = new ConservationStatus( { status: "foo" } );
      expect( cs.statusText( ) ).to.eq( "foo" );
    } );
    it( "returns nothing if there is no status", ( ) => {
      const cs = new ConservationStatus( { } );
      expect( cs.statusText( ) ).to.be.undefined;
    } );
  } );
} );
