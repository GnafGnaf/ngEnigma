import {InvalidArgumentError} from "../../app/shared/errors/invalidArgumentError";
import {Cypher} from "./cypher";
import {ALPHABET} from "../constants";

export class SimpleSubstitution implements Cypher {
  private readonly substitutionAlphabet: string;

  public constructor(substitutionAlphabet: string) {
    this.substitutionAlphabet = substitutionAlphabet.toUpperCase();
  }

  encode(plaintext: string): string {
    let cypertext = '';

    for (let character of plaintext) {
      cypertext += SimpleSubstitution.substitute(character, ALPHABET, this.substitutionAlphabet);
    }

    return cypertext;
  }

  decode(cypherText: string): string {
    let plaintext = '';

    for (let character of cypherText) {
      plaintext += SimpleSubstitution.substitute(character, this.substitutionAlphabet, ALPHABET);
    }

    return plaintext;
  }

  private static substitute(character: string, sourceAlphabet: string, targetAlphabet: string): string {
    let positionInAlphabet = sourceAlphabet.indexOf(character);

    if (positionInAlphabet < 0) {
      throw new InvalidArgumentError(character + ' could not be substituted')
    }

    return targetAlphabet.charAt(positionInAlphabet);
  }

  static nullSubstitution() {
    return new this(ALPHABET);
  }
}
