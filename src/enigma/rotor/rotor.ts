import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {ALPHABET} from "../constants";
import {RotorStateObserver} from "../../app/rotor/rotorStateObserver";

export class Rotor {
  nextRotor: Rotor;
  previousRotor: Rotor;
  private encryptingPart: SimpleSubstitution;
  private rotatingPart: SimpleSubstitution;
  private stateOfRotatingPart: string = ALPHABET;
  private stateChangeObservers: Array<RotorStateObserver> = [];

  constructor(private key: string) {
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);
    this.encryptingPart = new SimpleSubstitution(key);
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
    this.shiftStateOfRotatingPart();
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);

    if (this.stateOfRotatingPart == ALPHABET) {
      this.nextRotor.rotate();
    }

    this.notifyStateChangeObservers();
  }

  private shiftStateOfRotatingPart() {
    const firstLetter = this.stateOfRotatingPart.substring(0, 1);
    const rest = this.stateOfRotatingPart.substring(1);

    this.stateOfRotatingPart = rest + firstLetter;
  }

  rotateBackwards() {
    if (this.stateOfRotatingPart == ALPHABET) {
      this.nextRotor.rotateBackwards();
    }
    this.unshiftStateOfRotatingPart();
    this.rotatingPart = new SimpleSubstitution(this.stateOfRotatingPart);

    this.notifyStateChangeObservers();
  }

  private unshiftStateOfRotatingPart() {
    const lastLetter = this.stateOfRotatingPart.substring(this.key.length - 1);
    const rest = this.stateOfRotatingPart.substring(0, this.key.length - 1);

    this.stateOfRotatingPart = lastLetter + rest;
  }

  registerStateChangeObserver(observer: RotorStateObserver) {
    this.stateChangeObservers.push(observer);
    observer.onRotorStateChange(this.getRotorState());
  }

  private notifyStateChangeObservers()
  {
    for(let observer of this.stateChangeObservers) {
      observer.onRotorStateChange(this.getRotorState())
    }
  }

  private getRotorState() {
    return this.stateOfRotatingPart.substring(0, 1);
  }
}
