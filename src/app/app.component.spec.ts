import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MdInputModule, MdToolbarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {EnigmaComponent} from "./enigma/enigma.component";
import {EnigmaService} from "./services/enigma.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdInputModule, MdToolbarModule,
        FormsModule,
      ],
      declarations: [
        EnigmaComponent,
        AppComponent
      ],
      providers: [
        EnigmaService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
