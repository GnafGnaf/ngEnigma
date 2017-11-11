import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Enigma} from "../../enigma/enigma";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss'],
})
export class EnigmaComponent {
  @Input()
  private enigmaModel: Enigma;

  constructor() { }

  @Input()
  set plaintext(plaintext: string) {
    let encryptedText = '';
    for (let character of plaintext.toUpperCase()) {
      encryptedText += this.enigmaModel.encode(character);
    }
    this.onEncryption.emit(encryptedText);
  };

  @Output('onEncryption')
  onEncryption: EventEmitter<string> = new EventEmitter();
}
