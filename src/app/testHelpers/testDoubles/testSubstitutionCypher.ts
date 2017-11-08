import {SimpleSubstitution} from "../../../enigma/cyphers/simpleSubstitution";

export class TestSubstitutionCypher extends SimpleSubstitution {
  constructor() {
    super('BCDEFGHIJKLMNOPQRSTUVWXYZA');
  }
}
