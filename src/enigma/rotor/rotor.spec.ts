import {Rotor} from "./rotor";
import {SimpleSubstitution} from "../substitution/simpleSubstitution";

describe('Rotor', () => {
  let rotor: Rotor;
  beforeEach(() => {
    rotor = new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA'));
  });

  describe('Encryption', () => {
    it('outputs an encrypted version of the input character', () => {
      expect(rotor.encode('A')).toEqual('B');
    });

    it('rotates the substitution after every encoding', () => {
      expect(rotor.encode('A')).toEqual('B');
      expect(rotor.encode('A')).toEqual('C');
    });
  });
});
