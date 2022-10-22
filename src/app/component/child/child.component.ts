import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  //부모컴퍼넌트가 자식 컴퍼넌트이 뷰를 감추거나 보이기 위해 접근할 프로퍼티
  public isShow = true;
  contextText = 'Child';

  constructor() {}

  ngOnInit(): void {}

  changeText(text: string) {
    this.contextText = text;
  }
}
