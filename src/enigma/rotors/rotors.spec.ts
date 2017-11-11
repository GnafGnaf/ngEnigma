
import {Rotor} from "../rotor/rotor";
import {ALPHABET} from "../constants";
import {Rotors} from "./rotors";

describe('Rotors', () => {
  it('daisy chains its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA'),
      new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA')
    ]);
    expect(rotors.encode('A')).toEqual('C');
  });

  it('daisy chains its rotors to decode', () => {
    let rotors: Rotors = new Rotors([
      new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA'),
      new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA')
    ]);
    expect(rotors.decode('C')).toEqual('A');
  });

  it('rotates its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor(ALPHABET),
      new Rotor(ALPHABET)
    ]);
    expect(rotors.encode('A')).toEqual('A');
    rotors.rotate();
    expect(rotors.encode('A')).toEqual('B');
  });

  it('handles overflows of its rotors', () => {
    let rotors: Rotors = new Rotors([
      new Rotor(ALPHABET),
      new Rotor(ALPHABET)
    ]);
    for (let letter of ALPHABET) {
      rotors.rotate();
    }
    expect(rotors.encode('A')).toEqual('B');
  });
});
