
import {Rotor} from "../rotor/rotor";
import {ALPHABET} from "../constants";
import {Rotors} from "./rotors";
import {SimpleSubstitution} from "../substitution/simpleSubstitution";

describe('Rotors', () => {
  it('daisy chains its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA')),
      new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA'))
    ]);
    expect(rotors.encode('A')).toEqual('C');
  });

  it('rotates its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor(new SimpleSubstitution(ALPHABET)),
      new Rotor(new SimpleSubstitution(ALPHABET))
    ]);
    expect(rotors.encode('A')).toEqual('A');
    expect(rotors.encode('A')).toEqual('B');
  });

  it('handles overflows of its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor(new SimpleSubstitution(ALPHABET)),
      new Rotor(new SimpleSubstitution(ALPHABET))
    ]);
    for (let letter of ALPHABET) {
      rotors.encode('A');
    }
    expect(rotors.encode('A')).toEqual('B');
  });
});
