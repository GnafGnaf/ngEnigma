import {SubstitutionCypherFactory} from "./substitutionCypherFactory";
import {RotorConfiguration} from "../../config/rotorConfigurations";
import {SubstitutionCypher} from "./substitutionCypher";
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
      expect(factory.fromRotorNumber('IX')).toEqual(new SubstitutionCypher(new Map<string, string>([
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D'],
        ['D', 'E'],
        ['E', 'F'],
        ['F', 'G'],
        ['G', 'H'],
        ['H', 'I'],
        ['I', 'J'],
        ['J', 'K'],
        ['K', 'L'],
        ['L', 'M'],
        ['M', 'N'],
        ['N', 'O'],
        ['O', 'P'],
        ['P', 'Q'],
        ['Q', 'R'],
        ['R', 'S'],
        ['S', 'T'],
        ['T', 'U'],
        ['U', 'V'],
        ['V', 'W'],
        ['W', 'X'],
        ['X', 'Y'],
        ['Y', 'Z'],
        ['Z', 'A'],
      ])));
    });

    it('throws error if rotor number is not configured', () => {
      expect(() => {factory.fromRotorNumber('unknown number')})
        .toThrowError(InvalidArgumentError, 'unknown rotor number: "unknown number"')
    });
  });
});
