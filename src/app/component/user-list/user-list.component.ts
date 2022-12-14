import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private _users: User[] = [];

  //역할별 사용자 카운터
  cntAdmin: number | undefined;
  cntDeveloper: number | undefined;
  cntDesigner: number | undefined;

  @Input()
  set users(users: User[]) {
    if (!users) {
      return;
    }

    this.cntAdmin = users.filter(({ role }) => role === 'Administrator').length;
    this.cntDeveloper = users.filter(({ role }) => role === 'Developer').length;
    this.cntDesigner = users.filter(({ role }) => role === 'Designer').length;

    this._users = users;
  }
  get users(): User[] {
    return this._users;
  }

  @Output() remove = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}
}
