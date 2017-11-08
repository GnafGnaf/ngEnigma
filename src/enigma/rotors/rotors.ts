
import {Cypher} from "../cyphers/cypher";
import {Rotor} from "../rotor/rotor";

export class Rotors implements Cypher{
  private rotors: Rotor[];

  constructor(rotors: Rotor[]) {
    this.rotors = rotors;

    let previousRotor = null;
    for (let rotorNr in this.rotors) {
      let rotor = this.rotors[+rotorNr];
      let nextRotor = this.rotors[+rotorNr + 1];

      if (nextRotor instanceof Rotor) {
        rotor.informAboutOverflow(nextRotor);
      }
    }
  }

  encode(plaintext: string): string {
    return this.rotors.reduce((encryptedText, rotor) => {
      return rotor.encode(encryptedText);
    }, plaintext);
  }

  decode(cypherText: string): string {
    return this.rotors.reverse().reduce((plaintext, rotor) => {
      return rotor.decode(plaintext);
    }, cypherText);
  }

  rotate() {
    this.rotors[0] && this.rotors[0].rotate();
  }
}
