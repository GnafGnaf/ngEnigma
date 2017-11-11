import {Component, OnInit} from '@angular/core';
import {EnigmaService} from "./services/enigma.service";
import {Enigma} from "../enigma/enigma";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  plainText: String = '';
  cypherText: String = '';
  enigma: Enigma;

  constructor(public enigmaService: EnigmaService) {}

  ngOnInit(): void {
    this.enigma = this.enigmaService.get('EnigmaI');
  }
}
