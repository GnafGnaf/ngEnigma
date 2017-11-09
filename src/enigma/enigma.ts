import {Rotor} from "./rotor/rotor";
import {ALPHABET} from "./constants";
import {InvalidArgumentError} from "../app/shared/errors/invalidArgumentError";
import {Rotors} from "./rotors/rotors";
import {Reflector} from "./reflector/reflector";

export class Enigma {
  private rotors: Rotors;
  private reflector: Reflector = Reflector.NullReflector();

  constructor(rotors: Array<Rotor>, reflector?: Reflector) {
    this.rotors = new Rotors(rotors);
    if (reflector instanceof Reflector) {
      this.reflector = reflector;
      this.reflector.setRotors(this.rotors);
    }
  }

  encode(character: string) : string {
    if (!Enigma.isAlphabeticalCharacter(character)) {
      throw new InvalidArgumentError(character + ' is not a character Enigma can encode');
    }

    let encodedCharacter = this.rotors.encode(character);
    encodedCharacter = this.reflector.reflect(encodedCharacter);

    this.rotors.rotate();
    return encodedCharacter;
  }

  private static isAlphabeticalCharacter(character: string) {
    let isCharacter = character.length === 1;
    let isPartOfAlphabet = ALPHABET.indexOf(character.toUpperCase()) >= 0;

    return isCharacter && isPartOfAlphabet;
  }
}
