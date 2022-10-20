import { Component } from '@angular/core';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
