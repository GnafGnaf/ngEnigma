import {Cypher} from "../cyphers/cypher";
import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {OverflowObserver} from "./OverflowObserver";
import {ALPHABET} from "../constants";

export class Rotor implements OverflowObserver{
  private stateOfRotatingPart = ALPHABET;
  private rotatingPart: SimpleSubstitution;
  private overflowObservers: Array<OverflowObserver> = [];

  constructor(private encryptingPart: Cypher) {
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);
  }

  encode(plaintext: string): string {
    return this.encryptingPart.encode(this.rotatingPart.encode(plaintext));
  }

  decode(cypherText: string): string {
    return this.encryptingPart.decode(this.rotatingPart.decode(cypherText));
  }

  rotate() {
    const firstLetter = this.stateOfRotatingPart.substring(0,1);
    const rest = this.stateOfRotatingPart.substring(1);

    this.stateOfRotatingPart = rest + firstLetter;
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);

    if (this.stateOfRotatingPart == ALPHABET) {
      this.overflowObservers.forEach((observer) => observer.onOverflow());
    }
  }

  informAboutOverflow(observer: OverflowObserver) {
    this.overflowObservers.push(observer);
  }

  onOverflow() {
    this.rotate();
  }
}
