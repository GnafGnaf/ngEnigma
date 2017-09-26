import {ROTOR_CONFIGURATIONS, RotorConfiguration} from "../../config/rotorConfigurations";
import {SubstitutionCypher} from "./substitutionCypher";
import {InvalidArgumentError} from "../errors/invalidArgumentError";
import {Inject, Injectable} from "@angular/core";

const ALPHABET : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

@Injectable()
export class SubstitutionCypherFactory {
  configuration: Map<string, RotorConfiguration> = new Map<string, RotorConfiguration>();

  constructor(@Inject('ROTOR_CONFIGURATIONS') configuration: RotorConfiguration[]) {
    for (let rotorConfiguration of configuration) {
      if (rotorConfiguration.substitution.length !== ALPHABET.length){
        throw new InvalidArgumentError('Invalid rotorConfiguration: ' + rotorConfiguration.rotorNumber);
      }
      this.configuration.set(rotorConfiguration.rotorNumber, rotorConfiguration);
    }
  };

  fromRotorNumber(rotorNumber: string) : SubstitutionCypher {
    if (!this.configuration.has(rotorNumber)) {
      throw new InvalidArgumentError(`unknown rotor number: "${rotorNumber}"`)
    }
    return SubstitutionCypherFactory.fromRotorConfiguration(this.configuration.get(rotorNumber));
  }

  private static fromRotorConfiguration(rotorConfiguration: RotorConfiguration) : SubstitutionCypher {
    let substitution : Map<string, string> = new Map<string, string>();

    for (let i = 0; i < ALPHABET.length; i++) {
      substitution.set(ALPHABET.charAt(i), rotorConfiguration.substitution.charAt(i));
    }

    return new SubstitutionCypher(substitution);
  }
}
