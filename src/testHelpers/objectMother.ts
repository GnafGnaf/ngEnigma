import {SimpleSubstitution} from "../enigma/cyphers/simpleSubstitution";
import {Rotor} from "../enigma/rotor/rotor";
import {Enigma} from "../enigma/enigma";
import {Reflector} from "../enigma/reflector/reflector";
import {PairSubstitution} from "../enigma/cyphers/pairSubstitution";

export class ObjectMother {
  static createRotor() {
    return new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA');
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
    return new Reflector(this.createPairSubstitution());
  }

  static createPairSubstitution() {
    return new PairSubstitution('AZ', 'BX', 'CV', 'DT', 'ER', 'FP', 'GN', 'HO', 'IQ', 'JS', 'KU', 'LW', 'MY');
  }
}
