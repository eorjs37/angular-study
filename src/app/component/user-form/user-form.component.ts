import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm) {
    console.log(userForm);
  }
}
