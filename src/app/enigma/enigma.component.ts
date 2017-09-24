import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {RotorsComponent} from "../rotors/rotors.component";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss']
})
export class EnigmaComponent {

  constructor() { }

  @ViewChild(RotorsComponent)
  rotors: RotorsComponent;

  @Input()
  set plaintext(plaintext: string) {
    let encryptedText: string = plaintext;

    if (this.rotors instanceof RotorsComponent) {
      encryptedText = this.rotors.encrypt(plaintext);
    }

    this.onEncryption.emit(encryptedText);
  };

  @Output('onEncryption')
  onEncryption: EventEmitter<string> = new EventEmitter();
}
