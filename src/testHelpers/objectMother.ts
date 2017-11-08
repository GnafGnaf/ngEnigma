import {SimpleSubstitution} from "../enigma/cyphers/simpleSubstitution";
import {Rotor} from "../enigma/rotor/rotor";
import {Enigma} from "../enigma/enigma";
import {Reflector} from "../enigma/reflector/reflector";

export class ObjectMother {
  static createSimpleSubstitution() {
    return new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA');
  }

  static createRotor() {
    return new Rotor(this.createSimpleSubstitution());
  }

  static createSimpleEnigma() {
    return new Enigma([this.createRotor()]);
  };

  static createEnigmaWithTwoRotors() {
    return new Enigma([this.createRotor(), this.createRotor()]);
  };

  static createEnigmaWithReflector() {
    return new Enigma([this.createRotor()], this.createReflector());
  };

  static createReflector() {
    return new Reflector(this.createSimpleSubstitution());
  }

}
