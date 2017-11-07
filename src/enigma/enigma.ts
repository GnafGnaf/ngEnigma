import {Rotor} from "./rotor/rotor";
import {ALPHABET} from "./constants";
import {InvalidArgumentError} from "../app/shared/errors/invalidArgumentError";
import {Rotors} from "./rotors/rotors";

export class Enigma {
  private rotors: Rotors;

  constructor(rotors: Array<Rotor>) {
    this.rotors = new Rotors(rotors);
  }

  encode(character: string) : string {
    if (!Enigma.isAlphabeticalCharacter(character)) {
      throw new InvalidArgumentError(character + ' is not a character Enigma can encode');
    }

    return this.rotors.encode(character);
  }

  private static isAlphabeticalCharacter(character: string) {
    let isCharacter = character.length === 1;
    let isPartOfAlphabet = ALPHABET.indexOf(character.toUpperCase()) >= 0;

    return isCharacter && isPartOfAlphabet;
  }
}
