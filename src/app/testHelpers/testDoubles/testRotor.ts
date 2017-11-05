import {RotorComponent} from "../../rotor/rotor.component";
import {SimpleSubstitution} from "../../../enigma/substitution/simpleSubstitution";
import {TestSubstitutionCypher} from "./testSubstitutionCypher";

export class TestRotor extends RotorComponent {
  substitutionCypher: SimpleSubstitution = new TestSubstitutionCypher();
}
