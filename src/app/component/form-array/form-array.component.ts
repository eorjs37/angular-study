import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  userForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      hobbies: new FormArray([new FormControl(''), new FormControl('')]),
    });
    console.log('userForm : ', this.userForm);
  }

  get hoobies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
}
