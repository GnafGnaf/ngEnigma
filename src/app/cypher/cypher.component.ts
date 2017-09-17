import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-cypher',
  templateUrl: './cypher.component.html',
  styleUrls: ['./cypher.component.scss']
})
export class CypherComponent implements OnInit, OnChanges {

  @Input()
  plainText: String;

  @Output()
  cypherText: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

    if (changes['plainText'] && this.plainText) {
      window.console.log('change:', this.plainText);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
