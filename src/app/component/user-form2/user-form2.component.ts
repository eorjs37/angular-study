import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form2',
  templateUrl: './user-form2.component.html',
  styleUrls: ['./user-form2.component.scss'],
})
export class UserForm2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onNgSubmit(user: any) {
    console.log('user : ', user);

    if (user.password.password1 !== user.password.password2) {
      console.log('패스워드가 일치하지 않습니다.');
    }
  }
}
