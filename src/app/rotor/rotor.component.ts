import {Component, Input} from '@angular/core';
import {SimpleSubstitution} from "../../enigma/substitution/simpleSubstitution";

@Component({
  selector: 'app-rotor',
  templateUrl: './rotor.component.html',
  styleUrls: ['./rotor.component.scss']
})
export class RotorComponent {

  constructor() { }

  @Input('substitutionCypher')
  substitutionCypher: SimpleSubstitution;

  public encrypt(plainText: string): string {
    let encryptedText: string = '';

    for(let char of plainText) {
      char = char.toUpperCase();
      try {
        encryptedText += this.substitutionCypher.encode(char);
      } catch (error) {
        // we just ignore the input
      }
    }

    return encryptedText;
  }
}
