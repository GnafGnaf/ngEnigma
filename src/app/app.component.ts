import {Component, OnInit} from '@angular/core';
import {EnigmaService} from "./services/enigma.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  plainText: string = '';
  cypherText: string = '';
  enigma;

  constructor(public enigmaService: EnigmaService) {
    this.enigma = this.enigmaService.get('EnigmaI');
  }
}
