import {Cypher} from "../cyphers/cypher";
import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {OverflowObserver} from "./OverflowObserver";
import {ALPHABET} from "../constants";

export class Rotor implements OverflowObserver{
  private stateOfRotatingPart = ALPHABET;
  private rotatingPart: SimpleSubstitution;
  private overflowObservers: Array<OverflowObserver> = [];
  private nextRotor: Rotor;
  private previousRotor: Rotor;

  constructor(private encryptingPart: Cypher) {
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);
  }

  encode(plaintext: string): string {
    let rotatedText = this.rotatingPart.encode(plaintext);
    let encryptedText = this.encryptingPart.encode(rotatedText);

    if (this.nextRotor instanceof Rotor) {
      return this.nextRotor.encode(encryptedText);
    }

    return encryptedText;
  }

  decode(cypherText: string): string {
    let rotatedText = this.rotatingPart.decode(cypherText);
    let decryptedText = this.encryptingPart.decode(rotatedText);

    if (this.previousRotor instanceof Rotor) {
      return this.previousRotor.decode(decryptedText);
    }

    return decryptedText;
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

  setNextRotor(nextRotor: Rotor) {
    this.nextRotor = nextRotor;
    this.informAboutOverflow(nextRotor);
  }

  setPreviousRotor(previousRotor: Rotor) {
    this.previousRotor = previousRotor;
  }
}
