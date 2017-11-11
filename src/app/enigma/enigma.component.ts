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
    this.onEncryption.emit(this.enigmaModel.encode(plaintext.toUpperCase()));
  };

  @Output('onEncryption')
  onEncryption: EventEmitter<string> = new EventEmitter();
}
