
import {Cypher} from "../cyphers/cypher";
import {Rotor} from "../rotor/rotor";

export class Rotors implements Cypher{
  private rotors: Rotor[];

  constructor(rotors: Rotor[]) {
    this.rotors = rotors;

    for (let rotorNr in this.rotors) {
      let previousRotor = this.rotors[+rotorNr -1];
      let rotor = this.rotors[+rotorNr];
      let nextRotor = this.rotors[+rotorNr + 1];

      if (nextRotor instanceof Rotor) {
        rotor.setNextRotor(nextRotor);
      }

      if (previousRotor instanceof Rotor) {
        rotor.setPreviousRotor(previousRotor);
      }
    }
  }

  encode(plaintext: string): string {
    let firstRotor = this.rotors[0];
    return firstRotor ? firstRotor.encode(plaintext) : plaintext;
  }

  decode(cypherText: string): string {
    let lastRotor = this.rotors[this.rotors.length -1];
    return lastRotor ? lastRotor.decode(cypherText) : cypherText;
  }

  rotate() {
    let firstRotor = this.rotors[0];
    firstRotor && firstRotor.rotate();
  }
}
