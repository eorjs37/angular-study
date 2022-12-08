import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidate4Component } from './form-validate4.component';

describe('FormValidate4Component', () => {
  let component: FormValidate4Component;
  let fixture: ComponentFixture<FormValidate4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidate4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
