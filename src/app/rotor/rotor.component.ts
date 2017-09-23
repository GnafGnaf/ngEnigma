import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rotor',
  templateUrl: './rotor.component.html',
  styleUrls: ['./rotor.component.scss']
})
export class RotorComponent implements OnInit {

  constructor() { }

  substitutions: Map<string, string> = new Map<string, string>([
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
  ]);

  public encrypt(plainText: string): string {
    let encryptedText: string = '';

    for(let char of plainText) {
      char = char.toUpperCase();
      if (this.substitutions.has(char)) {
        encryptedText += this.substitutions.get(char);
      }
    }

    return encryptedText;
  }

  ngOnInit() {
  }

}
