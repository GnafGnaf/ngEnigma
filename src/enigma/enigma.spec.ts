import {Enigma} from "./enigma";
import {InvalidArgumentError} from "../app/shared/errors/invalidArgumentError";
import {ObjectMother} from "../testHelpers/objectMother";

describe('Enigma', () => {

  describe('Encryption', () => {
    it('uses the rotor to encode the plaintext', () => {
      expect(ObjectMother.createSimpleEnigma().encode('A')).toEqual('B');
    });

    it('chains multiple rotors', () => {
      expect(ObjectMother.createEnigmaWithTwoRotors().encode('A')).toEqual('C');
    });

    it('changes the output for the same input after every encryption', () => {
      let enigma = ObjectMother.createEnigmaWithTwoRotors();

      expect(enigma.encode('A')).toEqual('C');
      expect(enigma.encode('A')).toEqual('D');
    });

    it('returns plain text if no rotors are set', () => {
      expect(new Enigma([]).encode('A')).toEqual('A');
    });

    it('only accepts single characters as input', () => {
      expect(() => {ObjectMother.createSimpleEnigma().encode('1')})
        .toThrowError(InvalidArgumentError, '1 is not a character Enigma can encode');
    });

    it(
      'uses the reflector to return the original character if you encrypt the decrypted version',
      () =>
    {
      let encodedCharacter = ObjectMother.createEnigmaWithReflector().encode('HELLOWORLD');
      expect(ObjectMother.createEnigmaWithReflector().encode(encodedCharacter)).toEqual('HELLOWORLD');
    });
  });
});
