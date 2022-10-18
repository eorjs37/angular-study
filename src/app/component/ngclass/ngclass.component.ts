import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss'],
})
export class NgclassComponent implements OnInit {
  state = true;

  //문자열 클래스
  stringCssClasses = 'text-bold color-blue';

  //배열 클래스 목록
  arrayCssClasses = ['text-italic', 'color-red'];

  //객체 클래스 목록
  objectCssClasses = {
    'text-bold': this.state,
    'text-itialc': !this.state,
    'color-red': this.state,
    'color-blue': !this.state,
  };

  //클래스 목록을 반환하는 컴퍼넌트 메소드
  getClassess(flag: string) {
    let classes;

    if (flag === 'italic-blue') {
      classes = {
        'text-bold': !this.state,
        'text-itialc': this.state,
        'color-red': !this.state,
        'color-blue': this.state,
      };
    } else {
      classes = {
        'text-bold': this.state,
        'text-itialc': !this.state,
        'color-red': this.state,
        'color-blue': !this.state,
      };
    }

    return classes;
  }

  constructor() {}

  ngOnInit(): void {}
}
