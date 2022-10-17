import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-component',
  templateUrl: './property-component.component.html',
  styleUrls: ['./property-component.component.scss'],
})
export class PropertyComponentComponent implements OnInit {
  name = 'ungmo2';
  contents =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad rerum earum quia blanditiis maiores maxime odio ipsam quas et hic impedit similique quis ipsa aliquam, voluptate fugit repellendus in.';
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  isDisabled = true;

  constructor() {}

  ngOnInit(): void {}
}
