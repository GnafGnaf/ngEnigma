import {SimpleSubstitution} from "../../../enigma/substitution/simpleSubstitution";

export class TestSubstitutionCypher extends SimpleSubstitution {
  constructor() {
    super('BCDEFGHIJKLMNOPQRSTUVWXYZA');
  }
}
