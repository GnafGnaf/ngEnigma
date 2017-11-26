import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaComponent } from './enigma.component';
import {ObjectMother} from "../../testHelpers/objectMother";
import {RotorComponent} from "../rotor/rotor.component";

describe('EnigmaComponent', () => {
  let component: EnigmaComponent;
  let fixture: ComponentFixture<EnigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [RotorComponent, EnigmaComponent]})
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

  it('shouldEncrypt', () => {
    let encrypted = '';
    component.rotors = [ObjectMother.createRotor()];
    component.reflector = ObjectMother.createReflector();
    component.ngOnInit();

    component.onEncryption.subscribe((encryptedText) => {
      encrypted = encryptedText;
    });

    component.plaintext = 'HELLOWORLD';
    expect(encrypted).toEqual('PLEBYPVSBW');

    component.plaintext = 'HELLO';
    expect(encrypted).toEqual('PLEBY');

    component.plaintext = 'HELLOWORLD';
    expect(encrypted).toEqual('PLEBYPVSBW');
  });

  it('shouldDecrypt', () => {
    let decrypted = '';
    component.rotors = [ObjectMother.createRotor()];
    component.reflector = ObjectMother.createReflector();
    component.ngOnInit();

    component.onEncryption.subscribe((encryptedText) => {
      decrypted = encryptedText;
    });

    component.plaintext = 'PLEBYPVSBW';
    expect(decrypted).toEqual('HELLOWORLD');

    component.plaintext = 'PLEBY';
    expect(decrypted).toEqual('HELLO');

    component.plaintext = 'PLEBYPVSBW';
    expect(decrypted).toEqual('HELLOWORLD');
  });
});
