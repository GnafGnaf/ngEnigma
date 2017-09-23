import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RotorComponent} from "../rotor/rotor.component";

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.scss']
})
export class EnigmaComponent implements OnInit {

  constructor() { }

  @ViewChild(RotorComponent)
  rotor: RotorComponent;

  @Input()
  set plaintext(plaintext: string) {
    this.onEncryption.emit(this.rotor.encrypt(plaintext));
  };

  @Output('onEncryption')
  onEncryption: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

}
