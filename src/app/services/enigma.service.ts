import { Injectable } from '@angular/core';
import {Enigma} from "../../enigma/enigma";
import {Rotor} from "../../enigma/rotor/rotor";
import {SimpleSubstitution} from "../../enigma/cyphers/simpleSubstitution";
import {Reflector} from "../../enigma/reflector/reflector";
import {PairSubstitution} from "../../enigma/cyphers/pairSubstitution";
import {ALPHABET} from "../../enigma/constants";

@Injectable()
export class EnigmaService {

  constructor() { }

  get(id: string): Enigma {
    return new Enigma(
      [new Rotor(new SimpleSubstitution(ALPHABET))],
      new Reflector(new PairSubstitution())
    );
    // return new Enigma(
    //   [new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA'))],
    //   new Reflector(new PairSubstitution('AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP', 'QR', 'ST', 'UV', 'WX', 'YZ'))
    // );
  }
}
