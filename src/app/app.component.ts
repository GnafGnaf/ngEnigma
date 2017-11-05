import {Component} from '@angular/core';
import {SubstitutionCypherFactory} from "./shared/factory/substitutionCypherFactory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  plainText: String = '';
  cypherText: String = '';

  constructor(public substitutionCypherFactory: SubstitutionCypherFactory) {}
}
