import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaComponent } from './enigma.component';
import {RotorsComponent} from "../rotors/rotors.component";
import {RotorComponent} from "../rotor/rotor.component";
import {TestRotor} from "../testHelpers/testDoubles/testRotor";

describe('EnigmaComponent', () => {
  let component: EnigmaComponent;
  let fixture: ComponentFixture<EnigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotorsComponent, RotorComponent, EnigmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


});
