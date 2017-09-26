import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorsComponent } from './rotors.component';
import {TestRotor} from "../testHelpers/testDoubles/testRotor";

describe('RotorsComponent', () => {
  let component: RotorsComponent;
  let fixture: ComponentFixture<RotorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Encryption', () => {
    it('chains the encryption of its rotors', () => {
      component.rotors.reset([new TestRotor(), new TestRotor()]);
      expect(component.encrypt('ABC')).toEqual('CDE');
    });
  });
});
