import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {OverflowObserver} from "./OverflowObserver";

export class Rotor {
  private overflowObservers: Array<OverflowObserver> = [];
  nextRotor: Rotor;
  previousRotor: Rotor;
  private encryptingPart: SimpleSubstitution;
  private readonly keyAtInput: string;

  constructor(private key: string) {
    this.keyAtInput = key;
    this.encryptingPart = new SimpleSubstitution(key);
  }

  encode(plaintext: string): string {
    let encryptedText = this.encryptingPart.encode(plaintext);

    if (this.nextRotor instanceof Rotor) {
      return this.nextRotor.encode(encryptedText);
    }

    return encryptedText;
  }

  decode(cypherText: string): string {
    let decryptedText = this.encryptingPart.decode(cypherText);

    if (this.previousRotor instanceof Rotor) {
      return this.previousRotor.decode(decryptedText);
    }

    return decryptedText;
  }

  rotate() {
    const firstLetter = this.key.substring(0,1);
    const rest = this.key.substring(1);

    this.key = rest + firstLetter;
    this.encryptingPart = new SimpleSubstitution(this.key);

    if (this.key == this.keyAtInput) {
      this.nextRotor.rotate();
    }
  }

  rotateBackwards() {
    if (this.key == this.keyAtInput) {
      this.nextRotor.rotateBackwards();
    }

    const lastLetter = this.key.substring(this.key.length - 1);
    const rest = this.key.substring(0, this.key.length -1);

    this.key = lastLetter + rest;
    this.encryptingPart = new SimpleSubstitution(this.key);
  }
}
