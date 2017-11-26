import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Rotor} from "../../enigma/rotor/rotor";
import {RotorStateObserver} from "./rotorStateObserver";

@Component({
  selector: 'app-rotor',
  templateUrl: './rotor.component.html',
  styleUrls: ['./rotor.component.scss']
})
export class RotorComponent implements RotorStateObserver, OnInit{
  @Input()
  rotorModel: Rotor;

  rotorState: string;

  constructor() { }

  onRotorStateChange(newState) {
    this.rotorState = newState;
  }

  ngOnInit(): void {
    this.rotorModel.registerStateChangeObserver(this);
  }
}
