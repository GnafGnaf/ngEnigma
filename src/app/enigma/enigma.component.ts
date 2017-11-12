import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Enigma} from "../../enigma/enigma";
import setPrototypeOf = Reflect.setPrototypeOf;

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss'],
})
export class EnigmaComponent {
  @Input()
  enigmaModel: Enigma;
  private plaintextOld: string = '';
  private encodedValue: string = '';

  constructor() { }

  @Input()
  set plaintext(plaintext: string) {
    plaintext = plaintext.toUpperCase();
    if (this.charactersWereAdded(plaintext)) {
      this.addCharacters(this.getNewCharacters(plaintext));
    } else {
      this.removeCharacters(plaintext);
    }

    this.plaintextOld = plaintext;
    this.onEncryption.emit(this.encodedValue);
  };

  private removeCharacters(plaintext: string) {
    this.encodedValue = this.encodedValue.substring(0, plaintext.length);
  }

  private getNewCharacters(plaintext: string) {
    let newCharacters = plaintext.replace(this.plaintextOld, '');
    return newCharacters;
  }

  private charactersWereAdded(plaintext: string) {
    return plaintext.length > this.plaintextOld.length;
  }

  private addCharacters(newCharacters: string) {
    for (let character of newCharacters) {
      this.encodedValue += this.enigmaModel.encode(character);
    }
  }

  @Output('onEncryption')
  onEncryption: EventEmitter<string> = new EventEmitter();
}
