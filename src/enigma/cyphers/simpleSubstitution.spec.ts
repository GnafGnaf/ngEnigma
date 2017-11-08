import {SimpleSubstitution} from "./simpleSubstitution";
import {InvalidArgumentError} from "../../app/shared/errors/invalidArgumentError";

describe('substitutionCypher', () => {
  let cypher: SimpleSubstitution;

  beforeEach(() => {
    cypher = new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA')
  });

  describe('encode', () => {
    it('substitutes one character for another', () => {
      expect(cypher.encode('A')).toEqual('B');
      expect(cypher.encode('N')).toEqual('O');
      expect(cypher.encode('Z')).toEqual('A');
    });

    it('encodes strings of characters', () => {
      expect(cypher.encode('ANZ')).toEqual('BOA');
    });

    it('throws error if character can not be substituted', () => {
      expect(() => {cypher.encode('1')})
        .toThrowError(InvalidArgumentError, '1 could not be substituted');
    });
  });

  describe('decode', () => {
    it('reverses the substitution', () => {
      expect(cypher.decode('B')).toEqual('A');
      expect(cypher.decode('O')).toEqual('N');
      expect(cypher.decode('A')).toEqual('Z');
    });

    it('decodes strings of characters', () => {
      expect(cypher.decode('BOA')).toEqual('ANZ');
    });

    it('throws error if a substitution can not be reversed', () => {
      expect(() => {cypher.decode('2')})
        .toThrowError(InvalidArgumentError, '2 could not be substituted');
    });
  });

  describe('NullSubstitution', () => {
    it('does nothing', () => {
      expect(SimpleSubstitution.nullSubstitution().encode('A')).toEqual('A');
      expect(SimpleSubstitution.nullSubstitution().decode('A')).toEqual('A');
    });
  });
});
