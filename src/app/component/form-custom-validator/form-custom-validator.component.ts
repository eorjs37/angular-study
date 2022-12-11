import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/utils/PasswordValidator';

@Component({
  selector: 'app-form-custom-validator',
  templateUrl: './form-custom-validator.component.html',
  styleUrls: ['./form-custom-validator.component.scss'],
})
export class FormCustomValidatorComponent implements OnInit {
  userForm2!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm2 = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}'),
      ]),
      passwordGroup: new FormGroup(
        {
          password: new FormControl('', Validators.required),
          confirmPassword: new FormControl('', Validators.required),
        },
        PasswordValidator.match // 사용자 장의 검증기 사용
      ),
    });
  }
}
