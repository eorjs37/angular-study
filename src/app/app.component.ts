import { Component, ViewChild } from '@angular/core';
import { User } from './models/user.model';
import { ChildComponent } from './component/child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ChildComponent, { static: false }) myChild:
    | ChildComponent
    | undefined;
  title = 'angular-study';
  isLarge = true;

  //자식 컴퍼넌트와 공유할 상태정보
  users: User[];

  constructor() {
    this.users = [
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer'),
    ];
  }

  setTitle(title: string) {
    this.title = title;
  }

  //사용자 추가
  addUser(name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  //새로운 사용자의 id를 취득
  getNextId(): number {
    return this.users.length
      ? Math.max(...this.users.map(({ id }) => id)) + 1
      : 1;
  }

  removeUser(user: User) {
    console.log(user);

    this.users = this.users.filter(({ id }) => id !== user.id);
  }

  toggle() {
    if (this.myChild != undefined) {
      this.myChild.isShow = !this.myChild.isShow;
    }
  }

  changeText() {
    if (this.myChild != undefined) {
      this.myChild.contextText = 'hello world';
    }
  }
}
