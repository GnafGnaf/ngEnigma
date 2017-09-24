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
  substitutionCypher: SubstitutionCypher = new SubstitutionCypher(new Map<string, string>([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
    ['G', 'H'],
    ['H', 'I'],
    ['I', 'J'],
    ['J', 'K'],
    ['K', 'L'],
    ['L', 'M'],
    ['M', 'N'],
    ['N', 'O'],
    ['O', 'P'],
    ['P', 'Q'],
    ['Q', 'R'],
    ['R', 'S'],
    ['S', 'T'],
    ['T', 'U'],
    ['U', 'V'],
    ['V', 'W'],
    ['W', 'X'],
    ['X', 'Y'],
    ['Y', 'Z'],
    ['Z', 'A'],
  ]));

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
