import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MdInputModule, MdToolbarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {EnigmaComponent} from "./enigma/enigma.component";
import {RotorsComponent} from "./rotors/rotors.component";
import {RotorComponent} from "./rotor/rotor.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdInputModule, MdToolbarModule,
        FormsModule,
      ],
      declarations: [
        EnigmaComponent,
        RotorsComponent,
        RotorComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
