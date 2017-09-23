import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorsComponent } from './rotors.component';

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
});
