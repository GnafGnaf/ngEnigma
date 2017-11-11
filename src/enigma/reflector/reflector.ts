import {Rotors} from "../rotors/rotors";
import {PairSubstitution} from "../cyphers/pairSubstitution";

export class Reflector {
  private rotors: Rotors = new Rotors([]);

  constructor(private cypher: PairSubstitution) {}

  setRotors(rotors: Rotors) {
    this.rotors = rotors;
  }

  reflect(plaintext: string): string {
    return this.rotors.decode(this.cypher.substitute(plaintext));
  }

  static NullReflector() {
    class NullReflector extends Reflector{
      setRotors(rotors: Rotors) {}
      reflect(plaintext) {
        return plaintext
      }
    }

    return new NullReflector(new PairSubstitution());
  }
}
