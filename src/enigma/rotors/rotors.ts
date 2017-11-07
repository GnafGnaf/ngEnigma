
import {Cypher} from "../substitution/cypher";
import {Rotor} from "../rotor/rotor";

export class Rotors implements Cypher{
  private rotors: Rotor[];

  constructor(rotors: Rotor[]) {
    this.rotors = rotors;

    let previousRotor = null;
    for (let rotor of this.rotors.reverse()) {
      if (previousRotor instanceof Rotor) {
        previousRotor.informAboutOverflow(rotor);
      }
      previousRotor = rotor;
    }
  }

  encode(plaintext: string): string {
    let encryptedText = this.rotors.reduce((encryptedText, rotor) => {
      return rotor.encode(encryptedText);
    }, plaintext);
    this.rotors[0] && this.rotors[0].rotate();
    return encryptedText;
  }

  decode(cypherText: string): string {
    return undefined;
  }
}
