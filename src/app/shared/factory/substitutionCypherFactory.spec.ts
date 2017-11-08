import {SubstitutionCypherFactory} from "./substitutionCypherFactory";
import {RotorConfiguration} from "../../config/rotorConfigurations";
import {SimpleSubstitution} from "../../../enigma/cyphers/simpleSubstitution";
import {InvalidArgumentError} from "../errors/invalidArgumentError";

describe('substitutionCypherFactory', () => {
  let factory: SubstitutionCypherFactory;
  beforeEach(() => {
    let rotorConfiguration: RotorConfiguration = new RotorConfiguration();
    rotorConfiguration.rotorNumber = 'IX';
    rotorConfiguration.substitution = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';

    factory = new SubstitutionCypherFactory([rotorConfiguration])
  });

  describe('Construction', () => {
    it('checks if number of characters in substitution is right', () => {
      let brokenRotorConfiguration = new RotorConfiguration();
      brokenRotorConfiguration.rotorNumber = 'IX';
      brokenRotorConfiguration.substitution = 'ABC';

      expect(() => new SubstitutionCypherFactory([brokenRotorConfiguration]))
        .toThrowError(InvalidArgumentError, 'Invalid rotorConfiguration: IX')
    });
  });

  describe('cypherCreation', () => {
    it('returns a cypher for a enigma rotor number', () => {
      expect(factory.fromRotorNumber('IX')).toEqual(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA'));
    });

    it('throws error if rotor number is not configured', () => {
      expect(() => {factory.fromRotorNumber('unknown number')})
        .toThrowError(InvalidArgumentError, 'unknown rotor number: "unknown number"')
    });
  });
});
