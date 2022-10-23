import { Component, Input, OnInit } from '@angular/core';

import { Checkbox } from '../../app.component';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {
  @Input() checkBox: Checkbox | undefined;

  constructor() {}

  ngOnInit(): void {}
}
