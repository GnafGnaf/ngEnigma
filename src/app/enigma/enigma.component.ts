import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Enigma} from "../../enigma/enigma";
import setPrototypeOf = Reflect.setPrototypeOf;
import {Reflector} from "../../enigma/reflector/reflector";
import {Rotor} from "../../enigma/rotor/rotor";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss'],
})
export class EnigmaComponent implements OnInit{
  private enigmaModel: Enigma;
  private plaintextOld: string = '';
  private encodedValue: string = '';

  @Input()
  rotors: Rotor[] = [];
  @Input()
  reflector: Reflector;

  constructor() {
  }

  ngOnInit(): void {
    this.enigmaModel = new Enigma(this.rotors, this.reflector);
  }

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
    for (let i = 0; i < this.encodedValue.length - plaintext.length; i++) {
      this.rotors[0].rotateBackwards();
    }
    this.encodedValue = this.encodedValue.substring(0, plaintext.length);
  }

  private getNewCharacters(plaintext: string) {
    return plaintext.replace(this.plaintextOld, '');
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
