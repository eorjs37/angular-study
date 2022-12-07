import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    public userid: string,
    public password: string,
    public role: string,
    public name?: string
  ) {
    this.userid = '';
  }
}

@Component({
  selector: 'app-form-validate2',
  templateUrl: './form-validate2.component.html',
  styleUrls: ['./form-validate2.component.scss'],
})
export class FormValidate2Component implements OnInit {
  user!: User;
  roles!: string[];
  test: string | undefined;
  constructor() {}

  ngOnInit(): void {
    this.roles = ['Admin', 'Developer', 'Guest'];
    this.test = '22';
    this.initUser();
  }

  onSubmit(user: any) {
    console.log(user);
    user.reset();
  }

  initUser() {
    this.user = new User('', '', this.roles[0]);
  }
}
