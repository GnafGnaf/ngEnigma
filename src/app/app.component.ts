import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  plainText: String = String('plain');
  cypherText: String;

  setCypherText(cypherText: String) {
    this.cypherText = cypherText
  }
}
