import {Component, ContentChildren, QueryList } from '@angular/core';
import {RotorComponent} from "../rotor/rotor.component";

@Component({
  selector: 'app-rotors',
  templateUrl: './rotors.component.html',
  styleUrls: ['./rotors.component.scss']
})
export class RotorsComponent {

  @ContentChildren(RotorComponent)
  rotors: QueryList<RotorComponent> = new QueryList<RotorComponent>();

  encrypt(plainText) {
    let encryptedText: string = plainText;

    for (let rotor of this.rotors.toArray()) {
      encryptedText = rotor.encrypt(encryptedText);
    }

    return encryptedText;
  }

  constructor() { }
}
