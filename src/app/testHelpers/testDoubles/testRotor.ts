import {RotorComponent} from "../../rotor/rotor.component";
import {SubstitutionCypher} from "../../shared/substitutionCypher/substitutionCypher";
import {TestSubstitutionCypher} from "./testSubstitutionCypher";

export class TestRotor extends RotorComponent {
  substitutionCypher: SubstitutionCypher = new TestSubstitutionCypher();
}
