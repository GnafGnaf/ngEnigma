import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdInputModule, MdToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import 'hammerjs';
import {FormsModule} from "@angular/forms";
import { EnigmaComponent } from './enigma/enigma.component';
import { RotorsComponent } from './rotors/rotors.component';
import { RotorComponent } from './rotor/rotor.component';
import {SubstitutionCypherFactory} from "./shared/substitutionCypher/substitutionCypherFactory";
import {ROTOR_CONFIGURATIONS} from "./config/rotorConfigurations";

@NgModule({
  declarations: [
    AppComponent,
    EnigmaComponent,
    RotorsComponent,
    RotorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule, MdInputModule, MdCardModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    SubstitutionCypherFactory,
    {provide: 'ROTOR_CONFIGURATIONS', useValue: ROTOR_CONFIGURATIONS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
