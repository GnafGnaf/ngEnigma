import {Enigma} from "./enigma";
import {Rotor} from "./rotor/rotor";
import {SimpleSubstitution} from "./substitution/simpleSubstitution";
import {InvalidArgumentError} from "../app/shared/errors/invalidArgumentError";

describe('Enigma', () => {

  describe('Encryption', () => {
    it('uses the rotor to encode the plaintext', () => {
      let enigma = new Enigma([new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQURSTUVWXYZ'))]);
      expect(enigma.encode('A')).toEqual('B');
    });

    it('chains multiple rotors', () => {
      let enigma = new Enigma([
        new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQURSTUVWXYZ')),
        new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQURSTUVWXYZ'))
      ]);

      expect(enigma.encode('A')).toEqual('C');
    });

    it('changes the output for the same input after every encryption', () => {
      let enigma = new Enigma([new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQURSTUVWXYZ'))]);
      expect(enigma.encode('A')).toEqual('B');
      expect(enigma.encode('A')).toEqual('C');
    });

    it('returns plain text if no rotors are set', () => {
      let enigma = new Enigma([]);
      expect(enigma.encode('A')).toEqual('A');
    });

    it('only accepts single characters as input', () => {
      let enigma = new Enigma([new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQURSTUVWXYZ'))]);
      expect(() => {enigma.encode('1')})
        .toThrowError(InvalidArgumentError, '1 is not a character Enigma can encode');
    })
  });
});
