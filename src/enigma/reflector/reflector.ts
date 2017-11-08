import {Rotors} from "../rotors/rotors";
import {Cypher} from "../cyphers/cypher";
import {SimpleSubstitution} from "../cyphers/simpleSubstitution";

export class Reflector {
  private rotors: Rotors = new Rotors([]);

  constructor(private cypher: Cypher) {}

  setRotors(rotors: Rotors) {
    this.rotors = rotors;
  }

  reflect(plaintext: string): string {
    return this.rotors.decode(this.cypher.encode(plaintext));
  }

  static NullReflector() {
    return new this(SimpleSubstitution.nullSubstitution());
  }
}
