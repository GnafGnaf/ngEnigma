import {Rotor} from "./rotor/rotor";
import {ALPHABET} from "./constants";
import {InvalidArgumentError} from "../app/shared/errors/invalidArgumentError";

export class Enigma {
  constructor(private rotors: Array<Rotor>) {}

  encode(character: string) : string {
    if (!Enigma.isAlphabeticalCharacter(character)) {
      throw new InvalidArgumentError(character + ' is not a character Enigma can encode');
    }

    for (let rotor of this.rotors) {
      character = rotor.encode(character.toUpperCase());
    }

    return character;
  }

  private static isAlphabeticalCharacter(character: string) {
    let isCharacter = character.length === 1;
    let isPartOfAlphabet = ALPHABET.indexOf(character.toUpperCase()) >= 0;

    return isCharacter && isPartOfAlphabet;
  }
}
