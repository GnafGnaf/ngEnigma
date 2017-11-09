import {Reflector} from "./reflector";
import {ObjectMother} from "../../testHelpers/objectMother";
import {Rotors} from "../rotors/rotors";

describe('Reflector', () => {
  it('encodes an input and reflects the encoded input to its rotors', () => {
    let reflector = new Reflector(ObjectMother.createPairSubstitution());
    let rotor = ObjectMother.createRotor();
    // if reflector and rotor have the same substitution we would encrypt and then decrypt with the same cypher
    // resulting in the plaintext. So lets spice things up and rotate.
    rotor.rotate();
    reflector.setRotors(new Rotors([rotor]));
    expect(reflector.reflect('A')).toEqual('Z');
  });

  describe('Null Reflector', () => {
    it('Does nothing', () => {
      expect(Reflector.NullReflector().reflect('A')).toEqual('A');
    });
  });
});
