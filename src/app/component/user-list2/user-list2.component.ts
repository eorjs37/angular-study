import {
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list2.component.html',
  styleUrls: ['./user-list2.component.scss'],
})
export class UserList2Component implements OnInit, AfterContentInit {
  //부모 컴퍼넌트가 지정한 콘텐츠 중에서 템플릿 참조변수 first를 가진 콘텐츠를 취득한다.
  @ContentChild('first') firstChild: UserComponent | undefined;

  //부모 컴퍼넌트가 지정한 콘텐츠 중에서 UserComponent 모두를 취득한다.
  @ContentChildren(UserComponent) children:
    | QueryList<UserComponent>
    | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.firstChild);
  }

  changeFirstUserColor() {
    this.firstChild?.randomizeColor();
  }

  changeAllUseColor() {
    this.children?.forEach((child) => child.randomizeColor());
  }
}
