import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() items: any;
  @Output() perentfunction: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // this.perentfunction.emit('hello');
  }
  callfunction() {
    this.perentfunction.emit('hello');
  }
}
