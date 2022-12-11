import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validate5',
  templateUrl: './form-validate5.component.html',
  styleUrls: ['./form-validate5.component.scss'],
})
export class FormValidate5Component implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}'),
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }),
      hobbies: new FormArray([new FormControl(''), new FormControl('')]),
    });
  }
}
