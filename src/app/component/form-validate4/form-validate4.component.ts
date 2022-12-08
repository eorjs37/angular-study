import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validate4',
  templateUrl: './form-validate4.component.html',
  styleUrls: ['./form-validate4.component.scss'],
})
export class FormValidate4Component implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userid: new FormControl(''),
      passwordGroup: new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      }),
    });
  }
}
