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

  describe('Encryption', () => {
    it('uses the rotors to encrypt the plaintext', () => {
      let rotors = new RotorsComponent();
      rotors.rotors.reset([new TestRotor()]);
      component.rotors = rotors;

      component.onEncryption.subscribe((encryptedText) => {
        expect(encryptedText).toEqual('BCD');
      });

      component.plaintext = 'ABC';
    });

    it('returns plain text if no rotors are set', () => {
      component.rotors = null;

      component.onEncryption.subscribe((encryptedText) => {
        expect(encryptedText).toEqual('ABC');
      });

      component.plaintext = 'ABC';
    });
  });
});
