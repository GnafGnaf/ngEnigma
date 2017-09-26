import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorComponent } from './rotor.component';
import {TestSubstitutionCypher} from "../testHelpers/testDoubles/testSubstitutionCypher";

describe('RotorComponent', () => {
  let component: RotorComponent;
  let fixture: ComponentFixture<RotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotorComponent);
    component = fixture.componentInstance;
    component.substitutionCypher = new TestSubstitutionCypher();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Encryption', () => {
    it('outputs an encrypted version of the input string', () => {
      expect(component.encrypt('ABC')).toEqual('BCD');
    });

    it('ignores non alphabetical characters', () => {
      expect(component.encrypt('HELLO WORLD!')).toEqual('IFMMPXPSME');
    });

    it('returns everything in UPPERCASE', () => {
      expect(component.encrypt('hello')).toEqual('IFMMP');
    });
  });
});
