import {Component, Input} from '@angular/core';
import {SubstitutionCypher} from "../shared/substitutionCypher/substitutionCypher";

@Component({
  selector: 'app-rotor',
  templateUrl: './rotor.component.html',
  styleUrls: ['./rotor.component.scss']
})
export class RotorComponent {

  constructor() { }

  @Input('substitutionCypher')
  substitutionCypher: SubstitutionCypher;

  public encrypt(plainText: string): string {
    let encryptedText: string = '';

    for(let char of plainText) {
      char = char.toUpperCase();
      try {
        encryptedText += this.substitutionCypher.substitute(char);
      } catch (error) {
        // we just ignore the input
      }
    }

    return encryptedText;
  }
}
