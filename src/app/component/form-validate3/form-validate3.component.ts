import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validate3',
  templateUrl: './form-validate3.component.html',
  styleUrls: ['./form-validate3.component.scss'],
})
export class FormValidate3Component implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      formControls: new FormGroup({}),
    });
    console.log(this.userForm);
  }
}
