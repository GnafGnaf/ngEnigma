import {Cypher} from "../substitution/cypher";
import {SimpleSubstitution} from "../substitution/simpleSubstitution";

export class Rotor implements Cypher {
  private stateOfRotatingPart = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private rotatingPart: SimpleSubstitution;

  constructor(private cypher: Cypher) {
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);
  }

  encode(plaintext: string): string {
    let cypherText = this.cypher.encode(this.rotatingPart.encode(plaintext));
    this.rotate();
    return cypherText;
  }

  private rotate() {
    const firstLetter = this.stateOfRotatingPart.substring(0,1);
    const rest = this.stateOfRotatingPart.substring(1);

    this.stateOfRotatingPart = rest + firstLetter;
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);
  }

  decode(cypherText: string): string {
    throw new Error("Method not implemented.");
  }
}
