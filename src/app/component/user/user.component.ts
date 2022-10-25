import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  colors = ['yellow', 'charteuse', 'crimson'];
  color = this.colors[0];
  constructor() {}

  randomizeColor() {
    this.color = this.colors[Math.floor(Math.random() * 3)];
  }

  ngOnInit(): void {}
}
