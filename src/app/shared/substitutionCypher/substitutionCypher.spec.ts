
import {SubstitutionCypher} from "./substitutionCypher";
import {InvalidArgumentError} from "../errors/invalidArgumentError";


describe('substitutionCypher', () => {
  let cypher: SubstitutionCypher;

  beforeEach(() => {
    cypher = new SubstitutionCypher(new Map<string, string>([['A', 'B'], ['N', 'O'],['Z', 'A']]))
  });

  describe('Substitution', () => {
    it('substitutes one character for another', () => {
      expect(cypher.substitute('A')).toEqual('B');
      expect(cypher.substitute('N')).toEqual('O');
      expect(cypher.substitute('Z')).toEqual('A');
    });

    it('throws error if character can not be substituted', () => {
      expect(() => {cypher.substitute('B')})
        .toThrowError(InvalidArgumentError, 'B could not be substituted');
    });
  });
});
