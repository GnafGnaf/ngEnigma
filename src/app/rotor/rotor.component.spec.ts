import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorComponent } from './rotor.component';
import {ObjectMother} from "../../testHelpers/objectMother";
import {Rotor} from "../../enigma/rotor/rotor";

describe('RotorComponent', () => {
  let component: RotorComponent;
  let fixture: ComponentFixture<RotorComponent>;
  let rotor: Rotor;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotorComponent);
    component = fixture.componentInstance;
    rotor = ObjectMother.createRotor();
    component.rotorModel = rotor;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('keeps track of the rotors state', () => {
    expect(component.rotorState).toEqual('A');
    rotor.rotate();
    expect(component.rotorState).toEqual('B');
  });
});
