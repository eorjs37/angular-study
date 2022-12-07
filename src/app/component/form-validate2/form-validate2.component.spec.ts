import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidate2Component } from './form-validate2.component';

describe('FormValidate2Component', () => {
  let component: FormValidate2Component;
  let fixture: ComponentFixture<FormValidate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
